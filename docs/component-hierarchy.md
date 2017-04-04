## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**SplashContainer**

**HomeContainer**
 - NavbarConatiner
 - Home

**NavbarConatiner**
 - SearchComponent

**PlantIndexContainer**
 - PlantsHeader
  * PlantIndex

**PlantDetailContainer**
 - PlantDetail

**PlantIndex**
 - PlantIndexItem
  + Plant

**UserDashBoardContainer**
 - UserPlantsHeader
  * PlantIndex


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/log-in" | "AuthFormContainer" |
| "/"       | "Splash-Page"       |
| "/plants" | "PlantIndexContainer" |
| "/plants/:id" | "PlantDetailContainer" |
| "/dashboard/:user_id" | "UserDashBoardContainer" |
