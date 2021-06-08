# Labs 10

## Prerequisites

- Tooling and work from previous labs

## Useful resources

- https://docs.microsoft.com/en-us/azure/app-service/overview
- https://docs.microsoft.com/en-us/azure/developer/github/github-actions
- https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow
- https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions

## Task 10.01 Create an Azure App Service and App Service Plan

Create a new App Service in the Azure Portal. Pick Europe West as the region and Node 14 as env.

You will need to create an App Service Plan if this is your first App Service. Subsequent apps should reuse this Service Plan.

## Task 10.02 Prepare apps for deployment

There are few minor tweaks needed to be done before the app could be available online.

In the backend app, the port should be configurable by the `PORT` environment variable.

In the frontend app, the URL to the backend cannot be hardcoded to the localhost anymore, so also parametrize this argument. To do so, you can read the environment variable `process.env.REACT_APP_API_URL` in the client app and set it during the build as `REACT_APP_API_URL`. The `REACT_APP_*` prefix is required.

If there are any failing tests and/or linting errors/warnings, you need to fix them now to prevent builds from failing.

## Task 10.03 Setup automatic deployment for the server app

Start by downloading the publish profile and saving it as text in a GitHub secret in your repository as `AZURE_WEBAPP_PUBLISH_PROFILE`.

Them modify your GitHub Actions workflow. It should set up the node and the project, then test/lint it, and if everything is ok it should use the `azure/webapps-deploy@v2` action with proper configuration to deploy the server app.

You can now focus on the server app and ignore the client app until the server is up and running.

Example workflow job could look like [this](release.yml).

If lost, you can follow steps according to the documentation - https://docs.microsoft.com/en-us/azure/app-service/deploy-github-actions?tabs=applevel

## Task 10.04 Create a new Azure Static Web App service and setup automatic deployment for the client app

Go to the Azure portal and set up a new Static Web App.

Copy the Deployment token and save it as a GitHub secret in the repository as `AZURE_STATIC_WEB_APPS_API_TOKEN`.

Then add additional steps to your GitHub Actions workflow to checkout, build, test, and lint the client app. If everything is fine, then deploy the app using the `Azure/static-web-apps-deploy@v1` action.

You can refer to the [example configuration](release.yml) to set up your process.

If lost, check out the documentation - https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow#build-and-deploy

As a bonus, you can define a navigation fallback to support SPA routing. To do so, [add a configuration](https://docs.microsoft.com/en-us/azure/static-web-apps/configuration#fallback-routes) to a `client/public/staticwebapp.config.json` file:

```
{
  "navigationFallback": {
    "rewrite": "/index.html"
  }
}
```