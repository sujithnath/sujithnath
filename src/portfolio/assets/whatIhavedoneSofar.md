
What I have done so far

- Worked in Skillovilla
- About
    - Build an Edtech dashboard where admins can create courses, tracks, curriculum with chapters.
    - Just need an MVP.
      - Perf was not a concern now
- Things I have done
      - Context as state management
        - single or multiple provider
        - custom hooks in between
        - Read more about it
        - Its pitfalls
        - Tech consultant didnt want redux to be introduced even when the pitfalls were pointed out
        - used container pattern
          - https://betterprogramming.pub/the-container-pattern-for-better-state-management-in-react-9351fe4381d1
      - Component modularization
        - Modular pattern
        - Components should be small and specific
          - 170 lines max
          - I structured the codebase around the concept of modules, each with its own responsibility. The approach is simple and it consists in breaking down application into smaller, single-purpose business function.
          - Function-specific components can be standalone, which makes testing and maintenance easier.
          - Each small component can be reused across multiple projects.
          - With smaller components, it’s easier to implement performance optimizations.
          - It’s easier to update smaller components.
          - Bigger components have to perform harder and may be difficult to maintain.
          - Consolidate duplicate code – DRY your code
            - React best practices also instruct you to keep code brief and precise. One way to do this is to avoid duplication – Don’t Repeat Yourself (DRY).
            - You can achieve this by scrutinizing the code for patterns and similarities. If you find any, it’s possible you’re repeating code and there’s scope to eliminate duplication. Most likely, a bit of rewriting can make it more concise
          - Name the component after the function
            - For example, SignUpComponent – it conveys instantly what the component does. On the other hand, if you name the component based on the need for the code, it can confuse you at a future point of time.
            - Another example, it’s preferable to name a component Avatar so that it can be used anywhere – for authors, users or in comments. Instead, if we name the component AuthorAvatar in the context of its usage, we’d be limiting the utility of that component.
          - One of React best practices is to keep your stateful data-loading logic separate from your rendering stateless logic. It’s better to have one stateful component to load data and another stateless component to display that data. This reduces the complexity of the components.
        - bears a single responsibility. - Stateless components will be under components  and State components will be under containers
        - I always separate State Management files from UI files.
        - Structure
          - Components: stateless components
          - Containers
            - State components
            - Module Routes
            - Subroutes
          - Routes
            - Private route
              - where we check user is authnticated or not
            - Module level routes
          - Services
          - Store
            - context
              - reducers +
          - Utils
            - helper funtions
            - constants
          - StyleGuide
            - All the constants relating the text, button colors will be defined here
            - Defines the root style as well
          - All files related to any one component should be in a single folder
        - Example Login module
          - have several sub features like password reset module, signin module, signup module, request OTP module etc
          - here password reset module is only responsible for resetting the password
        - There are modules which are shared by other modules, like ..
        - Since most of the components were same, like course-track listing page, course-track form creation pages, I have create independent components which can be re-used at any point of time
        - Introduced story book to keep a track on it
          - why did i introduce storybook
        - Advanced level: the multi-package repository
          - to have a mono-repo where muliple projects live
          - just like google
          - if the module is an npm pakcage and shared accross by multiple projects it will be difficult to maintain or to troubleshoot issues with multiple projects with th module.
          - This means that you will end up with multiple projects within the same git repository. Many companies such as Google, Facebook or AirBnB use the single repository strategy for their projects. The often called “mono-repo” helps you coordinate changes across projects and libraries to increase your velocity and continuous modernization. Code reviews become faster as you only need a single pull request to modify multiple projects — as an atomic unit. Another great feature is share the same configuration files for all your projects, whether you use Jest, Eslint or TypeScript, which can be defined at the root level of your repository.
          - There are some libraries which can help you manage your repository. I personally use Lerna
      - In recent years, microservices allowed backend architectures to scale through loosely coupled codebases, each responsible for its own business logic and exposes an API, each independently deployable, and each owned and maintained by a different team
      - Introduced Storybook
      - Custom Hooks
        - Q's
        - What are hooks made of
        - Custom hooks for?
          - Modal
    - Challenges/Issue Faced
      - Using Context as a state-management
      - Form submission.
        - Had parallel images to be download and fetch
    -
      - Bit of unit test cases like on form submission

- Worked in weone
- Perf
  - Introduced webpack for bundling
  - Google Lighthouse in CI/CD pipeline threshold values
  - component perf
    - ydidwerender plugin
  - User profiler to check the component rendering
- Redux as statemanagement
  - immutable JS with redux
- Found out HOC issues basically
  - had to find who were using these HOC
  - ideally built a custom hooks which eliminated the need for HOC
    - How to create custom hooks
- Educated the team why the perf is curciule


how do we measure the per of a component? how do we enforce as a first class citizen
Udpate the above in my resume + Linkedin etc

Later to read for better practise in react
https://bitsrc.io/6-ways-to-share-and-reuse-react-components-6d80e2fd16cd
https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc
https://blog.bitsrc.io/how-we-build-our-design-system-15713a1f1833
https://blog.bitsrc.io/13-top-react-component-libraries-for-2020-488cc810ca49
