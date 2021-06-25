import React from 'react';

export const JavaPlusJsHeader = () => (
  <>
    <h2 className="text-center">We're using a “realworld” app example:</h2>
    <div className="flex justify-center items-center gap-x-6 mb-12">
      <span>Backend:&nbsp;
        <a href="https://github.com/gothinkster/spring-boot-realworld-example-app" target="_blank" rel="noreferrer">
          Spring
        </a>
      </span>
      <div className="flex justify-center items-center gap-x-2">
        <img style={{ marginBottom: 0 }} src="/img/spring-logo.svg" alt="spring-logo" />
        <img style={{ marginBottom: 0 }} src="/img/plus.svg" alt="plus" />
        <img style={{ marginBottom: 0 }} src="/img/angular-logo.svg" alt="angular-logo" />
      </div>
      <span>Frontend:&nbsp;
        <a href="https://github.com/gothinkster/angular-realworld-example-app" target="_blank" rel="noreferrer">
          Angular
        </a>
      </span>
    </div>
  </>
);
