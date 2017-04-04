# Plantshare

[Live][heroku]

[heroku]:(https://github.com/whasting/Plantshare)

## Minimum Viable Product
Plantshare is a mobile application built using Rails on the backend and React Native on the frontend. Here are the MVPs:

1. Emulator for Demonstration
2. Production README
3. New account creation, login, and guest/demo login
4. Users can view listings (plants)
5. Use Google Map API to show listing detail location
6. Users can CRUD listings via their dashboard
7. Users can 'claim' listings that they want
8. Posters can approve claims, reducing the number of
available items in the listing

Bonus:
- Search
- Taggings
- Multiple cities
- User profiles

Superbonus:
- Direct Messaging
- Web App

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Technologies & Technical Challenges

Plantshare will be using Rails on the backend and React Native on the frontend.

The main technical challenge will be learning React Native.

Additionally, the site will be using a combination of Google Maps Api to display the location of a plant detail item and Cloudinary image storage Api to allow users to upload images of their plants.

## Group Members

#### [Eddie Lao](https://github.com/eddielao)

#### [Colin Ritchey](https://github.com/colinritchey)

#### [Wade Hastings](https://github.com/whasting)

## Development Timeline

### Day 1: Backend and Frontend Setup

- Entire backend (Wade, Eddie)
- Authentication/Full React (Colin, Wade)
- Splash (Team)

### Day 2: Index Day

#### Dashboard
- PlantIndexContainer (Colin)
  - PlantIndex (Eddie)
    - PlantIndexItem (Wade)

#### Maps Api

- Research Google Maps Api (Wade)

### Day 3: Show Page

#### Plant Show Page
- PlantDetailContainer (Colin)
  - PlantDetail (Colin)
  - GoogleMap (Wade)

#### PlantRequest
- Create plant request interface (Eddie)

#### Dashboard - PlantRequest Approval
- Create poster pending, approve, deny interface (Team)

#### Cloudinary
- Research Cloudinary Api (Eddie)

### Day 4: Create, Edit, and Destroy

#### Create Page
- PlantListingForm (Eddie)
- Hook up user image uploads using Cloudinary (Eddie)

#### Edit/Delete Page
- PlantListingForm (Wade)

### Bonus Features

- [ ] Search
- [ ] Taggings
- [ ] Multiple cities
- [ ] User profiles

### Super Bonus

- [ ] Direct Messaging
- [ ] Web App
