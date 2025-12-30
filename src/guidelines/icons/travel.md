# Travel Icons

Icons related to travel, location, tours, activities, and destinations for the Ash Shaw Makeup Portfolio (applicable for future travel/event-based features).

## 📋 Available Icons

### Location & Navigation

#### MapPin
**Usage:** Location markers, venue addresses, event locations

```tsx
import { MapPin } from 'lucide-react';

<div className="flex items-center gap-2">
  <MapPin className="w-5 h-5 text-pink-500" />
  <span>Brisbane, Australia</span>
</div>
```

#### Map
**Usage:** Map views, location pages, venue finding

```tsx
import { Map } from 'lucide-react';

<button className="flex items-center gap-2">
  <Map className="w-5 h-5" />
  <span>View Map</span>
</button>
```

#### Navigation
**Usage:** Directions, GPS navigation, route planning

```tsx
import { Navigation } from 'lucide-react';

<a href="/directions" className="flex items-center gap-2">
  <Navigation className="w-4 h-4" />
  <span>Get Directions</span>
</a>
```

#### Compass
**Usage:** Exploration features, discovery sections

```tsx
import { Compass } from 'lucide-react';

<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-pink-purple-blue">
  <Compass className="w-6 h-6 text-white" />
</div>
```

### Events & Calendar

#### Calendar
**Usage:** Event dates, booking dates, schedule

```tsx
import { Calendar } from 'lucide-react';

<div className="flex items-center gap-2 text-gray-600">
  <Calendar className="w-5 h-5" />
  <span>January 15, 2025</span>
</div>
```

#### CalendarDays
**Usage:** Multi-day events, date ranges

```tsx
import { CalendarDays } from 'lucide-react';

<button className="flex items-center gap-2">
  <CalendarDays className="w-5 h-5" />
  <span>Select Dates</span>
</button>
```

#### Clock
**Usage:** Duration, reading time, event timing

```tsx
import { Clock } from 'lucide-react';

<span className="flex items-center gap-1 text-gray-600 text-fluid-sm">
  <Clock className="w-4 h-4" />
  2 hours
</span>
```

### People & Groups

#### Users
**Usage:** Group events, team members, attendees

```tsx
import { Users } from 'lucide-react';

<div className="flex items-center gap-2">
  <Users className="w-5 h-5 text-purple-500" />
  <span>Group Booking (5+ people)</span>
</div>
```

#### User
**Usage:** Individual booking, profile, contact

```tsx
import { User } from 'lucide-react';

<button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
  <User className="w-5 h-5 text-gray-600" />
</button>
```

#### UserPlus
**Usage:** Add guest, invite people, new contact

```tsx
import { UserPlus } from 'lucide-react';

<button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
  <UserPlus className="w-5 h-5" />
  <span>Add Guest</span>
</button>
```

### Activity Types

#### Camera
**Usage:** Photography services, portfolio shoots

```tsx
import { Camera } from 'lucide-react';

<div className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-lg bg-gradient-pink-purple-blue flex items-center justify-center">
    <Camera className="w-6 h-6 text-white" />
  </div>
  <div>
    <h3 className="font-heading font-semibold">Photography</h3>
    <p className="text-fluid-sm text-gray-600">Professional shoot</p>
  </div>
</div>
```

#### Mountain
**Usage:** Outdoor events, festival venues

```tsx
import { Mountain } from 'lucide-react';

<span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-fluid-sm">
  <Mountain className="w-4 h-4" />
  Outdoor Event
</span>
```

#### Waves
**Usage:** Beach events, coastal venues

```tsx
import { Waves } from 'lucide-react';

<div className="flex items-center gap-2">
  <Waves className="w-5 h-5 text-blue-500" />
  <span>Beach Location</span>
</div>
```

#### Palmtree
**Usage:** Tropical events, summer festivals

```tsx
import { Palmtree } from 'lucide-react';

<span className="flex items-center gap-2 text-green-600">
  <Palmtree className="w-5 h-5" />
  Tropical Venue
</span>
```

### Travel & Transport

#### Plane
**Usage:** Travel packages, destination events

```tsx
import { Plane } from 'lucide-react';

<div className="flex items-center gap-2">
  <Plane className="w-5 h-5 text-blue-500" />
  <span>Destination Event</span>
</div>
```

#### Car
**Usage:** Transportation, venue access

```tsx
import { Car } from 'lucide-react';

<button className="flex items-center gap-2">
  <Car className="w-4 h-4" />
  <span>Parking Available</span>
</button>
```

#### Bus
**Usage:** Group transport, shuttle service

```tsx
import { Bus } from 'lucide-react';

<div className="flex items-center gap-2 text-gray-600">
  <Bus className="w-4 h-4" />
  <span>Shuttle Service</span>
</div>
```

---

## Usage Patterns

### Event Location Card

```tsx
import { MapPin, Calendar, Clock, Users } from 'lucide-react';

function EventLocationCard() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-fluid-md shadow-lg">
      <h3 className="text-fluid-xl font-heading font-semibold mb-fluid-md">
        Festival Makeup Workshop
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0" />
          <span className="font-body text-body-guideline">Brisbane Convention Centre</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-700">
          <Calendar className="w-5 h-5 text-purple-500 flex-shrink-0" />
          <span className="font-body text-body-guideline">February 15, 2025</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-700">
          <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <span className="font-body text-body-guideline">2:00 PM - 5:00 PM</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-700">
          <Users className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className="font-body text-body-guideline">15 spots available</span>
        </div>
      </div>
    </div>
  );
}
```

### Activity Type Badge

```tsx
import { Camera, Mountain, Waves } from 'lucide-react';

function ActivityBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-fluid-sm font-medium">
        <Camera className="w-4 h-4" />
        Photography
      </span>
      
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-fluid-sm font-medium">
        <Mountain className="w-4 h-4" />
        Outdoor
      </span>
      
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-fluid-sm font-medium">
        <Waves className="w-4 h-4" />
        Beach
      </span>
    </div>
  );
}
```

---

## Related Documentation

- **[overview-icons.md](../overview-icons.md)** - Icon system overview
- **[interface.md](./interface.md)** - UI control icons
- **[Guidelines.md](../Guidelines.md)** - Main guidelines

---

**Last Updated:** January 2025  
**Version:** 3.2.0
