# Project Style Guide

## **Style Guide Goals**
The main goal of the document is to define the best practices when building a react enterprise 
application. Such an application will contain an enormous amount of views and logic. We need
too make the development, onboarding and collaborations between teams as easy as possible.

This guide is not a documentation on web development, but rather a definition of the project's 
best practices and style guides. These practises which are must to follow
in order to stay consistent. Each divided into different category.

## **Project Structure**
Each folder is consider as a module.

- **Api** - Includes only application contracts with the remote services. 
- **Src** - All the application code:  
    - **App** - Feature and pages components. Is divided by pages and features.
    - **Core** - Infrastructure logic. Is feature agnostic -
     it should work the same if you move it to another project.
    - **Domain** - Api fetching logic. Is divided to different application data domains.
    - **Shared** - Basic and feature agnostic components, like dropdown and similar controls.
    - **Store** - All state management and api requests. Is divided to different application domains.
    - **Styles** - Each SCSS style file which is not component specific will be here.
    - **Tests** - Infrastructure for tests (e.g. reusable code and mocks).
    
Every package will optionally include a barrel file (index.ts) which will expose 
all the public members of this folder. All other members will be consider 
protected. 

### **App**
Depends on the Store, Core, Styles and Shared modules. The app module will have the `App.tsk` as main entry point of the application.
All feature/page will have it's own module with the appropriate name. Shared
components between featured will be in the `common` module. 

### **Core**
This is the basic infrastructure logic for the entire application. Should
not depend on any other module.

### **Domain**
Depends on the Core and the Api modules. If an Api Will include data fetching services
and mapping logic. If any of the Api contract need to be changed for the application logic 
they will be defined here.

### **Shared**
Depends on the Core module. Will have only basic components and controls which are agnostic 
to the features and the business logic of the application. Will preferably use
Web Components for cross project reuse. 
 
### **Store**
The store is only place where we manage states and making requests, the 
application should only present the state. Depends on the Domain and Core modules.
The store is divided by the application data domains  
data domains and features into sub states. Each sub state will include the 
following modules and modules:  
- **Actions** -  Each action must contain a `type` field and an optional `payload` field.
Each action must have an interface and a creator for reusability. Action 
type should be an enum, because this way the switch-case in the reducer can infer it's interface.
- **Reducer** - Must be a pure function with no state mutations - always returns a new object.
- **Model** - The interface of the sub state.
- **Selectors**  - All logic for selecting specific slices form the store for presentation.
Can also be used for mapping.
- **Epics** - Handlers of asynchronous calls. Will intercepts a given action and always return 
an observable of a new one. The can resolve dependencies as the third parameter. 

The Store's root will include all store basic configuration logic: 
- Store configuration function to use in the application's entry point.
- Store's state interface.
- Epics setup and dependencies configuration.
- Reducers composition.
- IOC container setup.
- Root selector of the main state.

### **Styles**
This module will include all the common styles which are not connected to a specific component 
file. This module will be divided to the following submodules:
- **Abstract** - SASS variables and mixins.
- **Vendors**  - Overrides of third party styles.
- **Themes** - Theme configuration.

It will include util SASS classes for global usage. Because there is only SASS in
this module it will not depend on any other module.

### **Tests**
Infrastructure module for tests code reuse and setup, like mocks test runner.
Will be divided into submodules the same way as the `src` folder divided.

## **State Management**

## **Component Development**
All components (except App) will be divided into 2 groups:

#### **Containers**
Will have a `.container` extension. These are the only components who are
allowed to access the store. 

`connect` method will map the Store to the container.

`mapStateToProps` will be used the map the store's state the the containers props.
All mapping should be using only selectors for code reuse and memoization.
If additional mapping is needed for presentation purposes, another selector
will be created next to container.

`mapDispatchToProps` methods will create dispatch methods of needed actions to
the store. All actions should be created using their corresponding action 
creators.