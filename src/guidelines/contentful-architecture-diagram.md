# Contentful CMS - Architecture Diagrams

**Visual reference for content structure, relationships, and data flow**

---

## 📊 Content Model Relationships

### Complete Content Architecture

```mermaid
graph TB
    subgraph Foundation["🔧 Foundation Content Types"]
        BC[📁 Blog Category<br/>6 fields]
        WR[📁 Why Reason<br/>5 fields]
        SL[📁 Social Link<br/>6 fields]
    end
    
    subgraph Pages["📄 Page Content Types"]
        HP[📁 Homepage<br/>8 fields]
        AP[📁 About Page<br/>10 fields]
        PP[📁 Portfolio Page<br/>5 fields]
    end
    
    subgraph Content["📝 Content Item Types"]
        PE[📁 Portfolio Entry<br/>14 fields]
        BP[📁 Blog Post<br/>12 fields]
        TM[📁 Testimonial<br/>11 fields]
    end
    
    %% Relationships
    HP -.->|References| WR
    HP -.->|References| PE
    BP -.->|References| BC
    
    %% Styling
    style Foundation fill:#e1f5ff,stroke:#01c3cc,stroke-width:2px
    style Pages fill:#fff7ed,stroke:#f59e0b,stroke-width:2px
    style Content fill:#f0fdf4,stroke:#22c55e,stroke-width:2px
    
    style BC fill:#fef3c7,stroke:#f59e0b
    style WR fill:#fef3c7,stroke:#f59e0b
    style SL fill:#fef3c7,stroke:#f59e0b
    
    style HP fill:#fce7f3,stroke:#ec4899
    style AP fill:#fce7f3,stroke:#ec4899
    style PP fill:#fce7f3,stroke:#ec4899
    
    style PE fill:#dcfce7,stroke:#22c55e
    style BP fill:#dcfce7,stroke:#22c55e
    style TM fill:#dcfce7,stroke:#22c55e
```

---

## 🔄 Content Flow & Dependencies

### Creation Order Diagram

```mermaid
graph LR
    Start([Start Setup]) --> Phase1
    
    subgraph Phase1["Phase 1: Foundation<br/>(15 min)"]
        direction TB
        BC1[Blog Category<br/>Create 6 entries] --> WR1[Why Reason<br/>Create 3-5 entries]
        WR1 --> SL1[Social Link<br/>Create 5 entries]
    end
    
    Phase1 --> Phase2
    
    subgraph Phase2["Phase 2: Pages<br/>(30 min)"]
        direction TB
        HP1[Homepage<br/>1 entry] --> AP1[About Page<br/>1 entry]
        AP1 --> PP1[Portfolio Page<br/>1 entry]
    end
    
    Phase2 --> Phase3
    
    subgraph Phase3["Phase 3: Content<br/>(1-2 hours)"]
        direction TB
        PE1[Portfolio Entry<br/>5-20 entries] --> BP1[Blog Post<br/>3-10 entries]
        BP1 --> TM1[Testimonial<br/>3-10 entries]
    end
    
    Phase3 --> Done([Setup Complete])
    
    style Start fill:#ddd6fe,stroke:#8b5cf6
    style Done fill:#bbf7d0,stroke:#22c55e
    style Phase1 fill:#fef3c7,stroke:#f59e0b
    style Phase2 fill:#fce7f3,stroke:#ec4899
    style Phase3 fill:#dcfce7,stroke:#22c55e
```

---

## 🏗️ Data Transformation Flow

### Contentful → Application Pipeline

```mermaid
sequenceDiagram
    autonumber
    participant Editor as Content Editor<br/>(Contentful UI)
    participant CMS as Contentful CMS<br/>(Cloud)
    participant API as Contentful API<br/>(GraphQL/REST)
    participant Service as contentfulService.ts<br/>(Transform)
    participant Hook as React Hook<br/>(useContentful)
    participant Component as React Component<br/>(Portfolio/Blog)
    participant Mock as Mock Data<br/>(/data/mock)
    
    Editor->>CMS: Create/Update Content
    CMS->>CMS: Validate & Publish
    
    Component->>Hook: Request Content
    Hook->>Service: fetchContent()
    Service->>API: GET /entries
    
    alt API Success (< 3s)
        API-->>Service: Raw CMS Data
        Service->>Service: Transform to TypeScript
        Service->>Service: Validate Schema
        Service-->>Hook: Transformed Data
        Hook-->>Component: Render CMS Content
    else API Error/Timeout
        API--xService: Error/Timeout
        Service->>Mock: Fetch Mock Data
        Mock-->>Service: Static Data
        Service-->>Hook: Fallback Data
        Hook-->>Component: Render Mock Content
    end
    
    Note over Component: User sees content<br/>(CMS or Mock)
```

---

## 📦 Content Type Field Distribution

### Fields per Content Type

```mermaid
pie title Field Distribution Across Content Types
    "Portfolio Entry (14)" : 14
    "Blog Post (12)" : 12
    "Testimonial (11)" : 11
    "About Page (10)" : 10
    "Homepage (8)" : 8
    "Blog Category (6)" : 6
    "Social Link (6)" : 6
    "Portfolio Page (5)" : 5
    "Why Reason (5)" : 5
```

**Total:** 77 fields across 9 content types

---

## 🎯 Content Type Priority Matrix

### Implementation Priority vs Complexity

```mermaid
quadrantChart
    title Content Type Priority Matrix
    x-axis Low Complexity --> High Complexity
    y-axis Low Priority --> High Priority
    quadrant-1 Quick Wins
    quadrant-2 Critical Path
    quadrant-3 Can Wait
    quadrant-4 Major Features
    
    Blog Category: [0.2, 0.8]
    Why Reason: [0.15, 0.6]
    Social Link: [0.1, 0.4]
    Homepage: [0.5, 0.95]
    About Page: [0.6, 0.85]
    Portfolio Page: [0.3, 0.5]
    Portfolio Entry: [0.8, 0.9]
    Blog Post: [0.85, 0.85]
    Testimonial: [0.4, 0.55]
```

**Interpretation:**
- **Quadrant 2 (Top Left):** Start here - High priority, low complexity
- **Quadrant 1 (Top Right):** Do next - High priority, high complexity
- **Quadrant 4 (Bottom Right):** After critical content - Nice to have
- **Quadrant 3 (Bottom Left):** Optional - Can add later

---

## 🔗 Field Type Distribution

### Field Types Across All Content Types

```mermaid
pie title Field Types Used (77 total fields)
    "Short Text (Symbol)" : 35
    "Long Text (Text)" : 15
    "Media (Asset/Assets)" : 12
    "Boolean" : 7
    "Integer" : 5
    "Reference (Entry)" : 4
    "Rich Text" : 3
    "Date/DateTime" : 3
    "JSON Object" : 2
```

---

## 📋 Content Entry Workflow

### Editorial Process Flow

```mermaid
stateDiagram-v2
    [*] --> Draft: Create Entry
    
    Draft --> InReview: Submit for Review
    Draft --> Draft: Edit Content
    
    InReview --> Draft: Request Changes
    InReview --> ReadyToPublish: Approve
    
    ReadyToPublish --> Published: Publish Entry
    ReadyToPublish --> Draft: Make Edits
    
    Published --> Archived: Archive
    Published --> Draft: Unpublish & Edit
    
    Archived --> Published: Restore
    Archived --> [*]: Delete
    
    Published --> [*]: Live on Site
    
    note right of Draft
        Content editors work here
        Save frequently
    end note
    
    note right of Published
        Content visible on website
        Fetched via Delivery API
    end note
```

---

## 🎨 Homepage Content Structure

### Homepage Data Sources

```mermaid
graph TD
    Home[Homepage Component] --> Hero[Hero Section]
    Home --> Why[Why Section]
    Home --> Featured[Featured Work]
    Home --> Blog[Blog Preview]
    Home --> Footer[Footer]
    
    Hero --> HPContent[Homepage Entry<br/>from Contentful]
    HPContent --> Title[title]
    HPContent --> Subtitle[subtitle]
    HPContent --> Description[description]
    HPContent --> Images[heroImages]
    
    Why --> WhyRef[whyReasons Reference<br/>from Homepage]
    WhyRef --> WR1[Why Reason 1]
    WhyRef --> WR2[Why Reason 2]
    WhyRef --> WR3[Why Reason 3]
    
    Featured --> FeatRef[featuredWork Reference<br/>from Homepage]
    FeatRef --> PE1[Portfolio Entry 1]
    FeatRef --> PE2[Portfolio Entry 2]
    FeatRef --> PE3[Portfolio Entry 3]
    
    Blog --> BlogContent[Blog Posts<br/>from Contentful]
    BlogContent --> Recent[3 Most Recent]
    
    Footer --> SocialContent[Social Links<br/>from Contentful]
    
    style Home fill:#fce7f3,stroke:#ec4899,stroke-width:3px
    style HPContent fill:#ddd6fe,stroke:#8b5cf6
    style WhyRef fill:#fef3c7,stroke:#f59e0b
    style FeatRef fill:#dcfce7,stroke:#22c55e
    style BlogContent fill:#e0e7ff,stroke:#6366f1
    style SocialContent fill:#fce7f3,stroke:#ec4899
```

---

## 📝 Blog Post Content Structure

### Blog Post Anatomy

```mermaid
graph LR
    subgraph BlogPost["Blog Post Entry"]
        direction TB
        Meta[📋 Metadata]
        Content[📝 Content]
        Media[🖼️ Media]
        Taxonomy[🏷️ Taxonomy]
        Settings[⚙️ Settings]
    end
    
    Meta --> ID[id]
    Meta --> Slug[slug]
    Meta --> Title[title]
    Meta --> Dates[publishedAt<br/>updatedAt]
    Meta --> Author[author<br/>name, avatar, bio]
    
    Content --> Excerpt[excerpt<br/>500 chars]
    Content --> FullContent[content<br/>Rich Text]
    
    Media --> FeatImg[featuredImage<br/>Asset]
    
    Taxonomy --> Category[category<br/>Reference]
    Taxonomy --> Tags[tags<br/>Array]
    
    Settings --> ReadTime[readTime<br/>Integer]
    Settings --> Featured[featured<br/>Boolean]
    
    style BlogPost fill:#e0e7ff,stroke:#6366f1,stroke-width:3px
    style Meta fill:#fef3c7,stroke:#f59e0b
    style Content fill:#dcfce7,stroke:#22c55e
    style Media fill:#fce7f3,stroke:#ec4899
    style Taxonomy fill:#ddd6fe,stroke:#8b5cf6
    style Settings fill:#fed7aa,stroke:#fb923c
```

---

## 🖼️ Portfolio Entry Content Structure

### Portfolio Entry Anatomy

```mermaid
graph TB
    subgraph PortfolioEntry["Portfolio Entry"]
        direction TB
        Core[🎯 Core Data]
        Images[🖼️ Images]
        Context[📍 Context]
        Content[📝 Content]
        Meta[🔧 Metadata]
    end
    
    Core --> ID[id]
    Core --> Slug[slug]
    Core --> Title[title]
    Core --> Category[category<br/>Dropdown]
    Core --> SubCat[subcategory]
    
    Images --> ImgArray[images<br/>Array of Assets<br/>1-20 images]
    
    Context --> Location[location]
    Context --> Event[event]
    Context --> Date[date]
    
    Content --> Desc[description<br/>2000 chars]
    Content --> Excerpt[excerpt<br/>300 chars]
    Content --> Tags[tags<br/>Array]
    
    Meta --> Featured[featured<br/>Boolean]
    Meta --> Order[order<br/>Integer]
    
    style PortfolioEntry fill:#dcfce7,stroke:#22c55e,stroke-width:3px
    style Core fill:#fef3c7,stroke:#f59e0b
    style Images fill:#fce7f3,stroke:#ec4899
    style Context fill:#ddd6fe,stroke:#8b5cf6
    style Content fill:#e0e7ff,stroke:#6366f1
    style Meta fill:#fed7aa,stroke:#fb923c
```

---

## 🔄 API Integration Architecture

### Complete System Overview

```mermaid
graph TB
    subgraph External["☁️ External Services"]
        CMS[Contentful CMS<br/>Cloud Headless]
        CDN[Contentful CDN<br/>Image Delivery]
    end
    
    subgraph Backend["⚙️ Backend Layer"]
        API[Contentful API<br/>GraphQL/REST]
        Service[contentfulService.ts<br/>Transform & Validate]
    end
    
    subgraph State["📦 State Management"]
        Hooks[React Hooks<br/>useContentful*]
        Cache[Client Cache<br/>In-Memory]
    end
    
    subgraph Fallback["💾 Fallback System"]
        Mock[Mock Data<br/>/data/mock]
        Types[TypeScript Types<br/>/data/types]
    end
    
    subgraph Frontend["🎨 Frontend Components"]
        Pages[Page Components<br/>Home, About, Portfolio]
        Sections[Section Components<br/>Hero, Featured, Blog]
        UI[UI Components<br/>Cards, Lightbox]
    end
    
    CMS --> API
    CDN --> API
    API --> Service
    Service --> Hooks
    Hooks --> Cache
    
    Service -.->|On Error| Mock
    Mock --> Types
    Types --> Hooks
    
    Hooks --> Pages
    Pages --> Sections
    Sections --> UI
    
    style External fill:#e1f5ff,stroke:#01c3cc,stroke-width:2px
    style Backend fill:#fff7ed,stroke:#f59e0b,stroke-width:2px
    style State fill:#f0fdf4,stroke:#22c55e,stroke-width:2px
    style Fallback fill:#fce7f3,stroke:#ec4899,stroke-width:2px
    style Frontend fill:#ddd6fe,stroke:#8b5cf6,stroke-width:2px
```

---

## 📊 Content Volume Planning

### Recommended Content Targets

```mermaid
gantt
    title Content Creation Timeline
    dateFormat YYYY-MM-DD
    section Foundation
    Blog Categories (6)       :done, cat, 2025-01-01, 1d
    Why Reasons (5)          :done, why, 2025-01-02, 1d
    Social Links (5)         :done, soc, 2025-01-03, 1d
    
    section Pages
    Homepage (1)             :done, home, 2025-01-04, 1d
    About Page (1)           :done, about, 2025-01-05, 1d
    Portfolio Page (1)       :done, port, 2025-01-06, 1d
    
    section Initial Content
    Portfolio Entries (10)   :active, pe1, 2025-01-07, 3d
    Blog Posts (5)           :active, bp1, 2025-01-10, 2d
    Testimonials (5)         :active, tm1, 2025-01-12, 1d
    
    section Growth Content
    Portfolio Entries (20)   :pe2, 2025-01-13, 7d
    Blog Posts (10)          :bp2, 2025-01-20, 7d
    Testimonials (10)        :tm2, 2025-01-27, 3d
```

**Milestones:**
- **Day 3:** Foundation complete
- **Day 6:** All page templates ready
- **Day 13:** Minimum viable content (MVP)
- **Day 30:** Full content library

---

## 🎯 Field Validation Summary

### Validation Rules Overview

| Field Type | Common Validations | Example |
|-----------|-------------------|---------|
| **Symbol (Short Text)** | Max length, Unique, Pattern | Max 100 chars |
| **Text (Long Text)** | Max length, Min length | Max 2000 chars |
| **Integer** | Range, In (dropdown) | 0-999 |
| **Boolean** | Default value | true/false |
| **Date/DateTime** | Format | ISO 8601 |
| **Asset** | MIME type, File size | Images only, <5MB |
| **Asset[]** | Size (min/max count) | 1-20 images |
| **Entry** | Link content type | blogCategory only |
| **Entry[]** | Link content type | whyReason only |
| **RichText** | Enabled node types | Headings, lists, links |

---

## 📚 TypeScript Type Alignment

### Content Type → TypeScript Mapping

```mermaid
graph LR
    subgraph Contentful["Contentful CMS"]
        CT1[blogPost<br/>Content Type]
        CT2[portfolioEntry<br/>Content Type]
        CT3[testimonial<br/>Content Type]
    end
    
    subgraph TypeScript["TypeScript Types<br/>/data/types"]
        T1[BlogPost<br/>Interface]
        T2[PortfolioEntry<br/>Interface]
        T3[Testimonial<br/>Interface]
    end
    
    subgraph Mock["Mock Data<br/>/data/mock"]
        M1[blogPosts<br/>Array]
        M2[portfolioEntries<br/>Array]
        M3[testimonials<br/>Array]
    end
    
    CT1 -.->|Matches| T1
    CT2 -.->|Matches| T2
    CT3 -.->|Matches| T3
    
    T1 -.->|Types| M1
    T2 -.->|Types| M2
    T3 -.->|Types| M3
    
    style Contentful fill:#e1f5ff,stroke:#01c3cc
    style TypeScript fill:#fef3c7,stroke:#f59e0b
    style Mock fill:#ddd6fe,stroke:#8b5cf6
```

**Critical Requirement:** All field names must match exactly between Contentful and TypeScript interfaces!

---

## 🚀 Quick Reference Legend

### Diagram Symbols

| Symbol | Meaning |
|--------|---------|
| 📁 | Content Type |
| 📄 | Page |
| 📝 | Content Item |
| 🖼️ | Media/Asset |
| 🔗 | Reference Relationship |
| ⚙️ | Configuration |
| 📋 | Metadata |
| 🏷️ | Tags/Categories |
| ☁️ | External Service |
| 💾 | Local Storage |
| ➡️ | Data Flow |
| ⚡ | Quick Action |

---

**Last Updated:** January 2025  
**Version:** 1.0.0

For complete documentation, see:
- [Quick Setup Guide](./contentful-quick-setup.md)
- [Content Models](./contentful-content-models.md)
- [Integration Guide](./contentful-integration.md)
