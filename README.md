# art-mosh-hamedani-testing-angular
Testing Angular 4 (previously Angular 2) Apps with Jasmine - Tutorial from Mosh Hamedani (Udemy)

####  Section 2: Unit Testing Angular Apps

#####  13. Code Coverage

-  `ng test --code-coverage`
-  view coverage
    -  go to `/testing-demo/coverage/testing-demo/index.html`
-  to disable test
    -  modify `it(...` to `xit(...`
-  to disable entire suite
    -  modify `describe(...` to `xdescribe(...`    

####  Section 3: Integration Testing

#####  17. Generating the Setup Code

-  `ng generate component greeter`
-  simplify test by reducing async block 

    