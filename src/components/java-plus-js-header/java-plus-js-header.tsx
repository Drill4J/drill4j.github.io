import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const JavaPlusJsHeader = () => (
  <div className="flex flex-col items-center">
    <h3>We're using a RealWorld app examples:</h3>
    <div className="flex gap-x-6 mb-12 pl-10 text-16 leading-20">
      <div className="flex justify-center items-center gap-x-3 leading-20">
        <img style={{ marginBottom: 0 }} src={useBaseUrl('img/spring-logo.svg')} alt="spring-logo" />
        <span className="flex flex-col">Backend:&nbsp;
          <a
            className="leading-20"
            href="https://github.com/gothinkster/spring-boot-realworld-example-app"
            target="_blank"
            rel="noreferrer"
          >
            Spring
          </a>
        </span>
      </div>
      <div className="flex justify-center items-center">
        <img style={{ marginBottom: 0 }} src={useBaseUrl('img/plus.svg')} alt="plus" />
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <img style={{ marginBottom: 0 }} src={useBaseUrl('img/angular-logo.svg')} alt="angular-logo" />
        <span className="flex flex-col leading-20">Frontend:&nbsp;
          <a className="leading-20" href="https://github.com/gothinkster/angular-realworld-example-app" target="_blank" rel="noreferrer">
            Angular
          </a>
        </span>
      </div>
    </div>
  </div>
);
