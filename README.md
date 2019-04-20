# Modern Stack Resume

> [Project issues available here](https://github.com/aretecode/modern-stack-web-resume/projects/1)

#### Monorepo for

- [modern-stack-resume-graphql](https://github.com/aretecode/modern-stack-resume-graphql)
- [modern-stack-resume-react](https://github.com/aretecode/modern-stack-resume-react)

# Deploy

1. [![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/aretecode/modern-stack-resume-graphql) _Graphql_
2. [![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/aretecode/modern-stack-resume-react) _React_

# Development

## Cloning

clone the [mono-repo](https://github.com/korfuri/awesome-monorepo) [`modern-stack-web-resume`](https://github.com/aretecode/modern-stack-web-resume)

```
git clone --recursive git@github.com:aretecode/modern-stack-web-resume.git
```

![](https://noccumpr-cdn.sirv.com/documentation/Screen%20Shot%202019-04-19%20at%2011.24.43%20PM.png)

> if you are facing with clone, you may not have SSH key configured with your GitHub account, [follow these steps to configure yours in a few seconds](https://www.testingexcellence.com/install-git-mac-generate-ssh-keys/). Once installed, do the cloning step again.

## Yarn Install

Run the following command to install all the packages

```
yarn install
```

There are two sub-modules in the stack.
We are using [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), so **no need** to `run yarn install` **multiple times** in each modules, running at the top level is enough.

![](https://noccumpr-cdn.sirv.com/documentation/Screen%20Shot%202019-04-19%20at%2011.55.21%20PM.png?h=300)

## Run the build

> Tip: for ease of use, open two terminal windows
> ![](https://user-images.githubusercontent.com/4022631/56454460-8478b400-6305-11e9-9d4c-51525d360399.png)

#### 1. client:

```
cd packages/client
yarn dev
```

Then, open `http://localhost/3000`

#### 2. graphql:

```
cd packages/graphql
yarn dev
```

Then, open `http://localhost/4000/graphql`

## Setup the data

After you running the build, you won't see any data.

![](https://noccumpr-cdn.sirv.com/documentation/Screen%20Shot%202019-04-20%20at%2012.04.34%20AM.png?h=300)

To see the content, we need to set it ourselves:

1. open `http://localhost/4000`

![](https://noccumpr-cdn.sirv.com/documentation/Screen%20Shot%202019-04-20%20at%2012.05.57%20AM.png?h=300)

2. use the following query

```jsx
mutation SetResume($basics: BasicsInputType, $work: [WorkInputType]) {
  setResume(basics: $basics, work: $work) {
    responseMessage
  }
}
```

![](https://noccumpr-cdn.sirv.com/documentation/Screen%20Shot%202019-04-20%20at%2012.06.35%20AM.png?h=300)

3. open the `Query Variables` ![](https://noccumpr-cdn.sirv.com/documentation/Screen%20Shot%202019-04-20%20at%2012.06.58%20AM.png&h=300)

4. add your JSON to the `Query Variables`. [Example data can be found in this gist](https://gist.github.com/aretecode/7da7359d3cb0e085e81822c1822d3d08) ![https://noccumpr-cdn.sirv.com/documentation/Screen%20Shot%202019-04-20%20at%2012.07.41%20AM.png]

5. click the play/`(>)` button to run it

6. refresh the [_client_](http://localhost/3000)

7. profit???
   
![](https://noccumpr-cdn.sirv.com/documentation/Screen%20Shot%202019-04-20%20at%2012.10.32%20AM.png?h=500)
