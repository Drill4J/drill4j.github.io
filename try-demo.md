---
layout: page
title: Demo Example ( Java agent )
permalink: /try-demo/
---

#### We have prepared special docker-compose file to demonstrate drill work.  
> All you need is docker with docker-compose.
<p><a href="/assets/files/stable/demo/docker-compose.yml" download><img src="/assets/img/d4j_img_download_docker_2.png" alt="image" /></a></p>

#### Start Drill Admin:

```console

docker-compose up -d drill-admin admin-ui agent-files

```

#### Start Example App with Drill Agent:

```console

docker-compose up -d example-app

```

#### After that you can find Drill Admin on [http://localhost:8091](http://localhost:8091)  
#### and Application UI on [http://localhost:8087](http://localhost:8087) 
> app based on [spring petclinic](https://github.com/spring-projects/spring-petclinic)  

#### Add browser extension [**drill-browser-extension**](https://github.com/Drill4J/browser-extension/releases/tag/v0.3.15) and 
### start testing with Drill!

***

## Demo Example ( JS agent )

> ATTENTION: experimental functionality

Work on JavaScript agent is still in progress, but we are pleased to provide you with the opportunity to try it out.  

**Clone the example repository:**

```console

git clone https://github.com/Drill4J/todomvc

```

**Run Drill4J services**:

1. Run

    ```console
      docker-compose -f docker-compose.services.yml up -d
    ```

2. Run `docker ps` and check that all services have started: `drill-admin`, `admin-ui`, `jsagent` and  `mongo`

3. Open Drill Admin UI at [http://localhost:9091](http://localhost:9091)

**Run sample application**:

1. Run

    ```console
      docker-compose up -d
    ```

2. Wait for `todomvc-typescript-angular` agent to appear in Admin UI at [http://localhost:9091](http://localhost:9091)

3. Press **Register** button

4. Click through *Step 1* and *Step 2*, but **make sure to enable** Test2Code plugin at *Step 3*

5. Open sample application at [http://localhost:8080](http://localhost:8080)

6. Make sure to install **latest version** of browser extension (please, see the section bellow)

## How to install browser extension

1. [Follow the link](https://github.com/Drill4J/browser-extension/releases/tag/v0.3.22)
2. Click on the "release.zip"
3. Unzip
4. Open [Google Chrome's extensions settings](chrome://extensions/)
5. Enable "Developer Mode" in the top-right corner of the screen
6. Click on the "Load Unpacked" button
7. Navigate to unzipped folder and select `build` folder inside. Confirm the dialog.
8. Right-click the DrillJ's extension icon in the toolbar, then select `options`. You will navigate to extension's options page.
9. Press on "Add new" button and fill the form:

    ```console
      Host = localhost:8080
      Agent ID = todomvc-typescript-angular
      Admin URL = http://localhost:9090
      Agent Type = JS
    ```

10. That's it! You can open sample app page and start using the extension. Don't forget to reload the sample app page if it was open prior to the extension installation.

## We would appreciate any feedback
