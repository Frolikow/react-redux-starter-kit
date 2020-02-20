import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { IProfile } from 'shared/types/models';

import { IFeatureEntry } from './types/app';

export const makeMockComponent = (componentName: string) => {
  const Container = () => React.createElement('div');
  Container.displayName = componentName;
  return Container;
};

export const profile: IProfile = {
  age: 100,
  nickname: 'Nickname',
  name: 'Name name',
  bio: 'profile bio',
  avatarURL: 'https://the-url.com',
};

export function makeMockEntry<T extends IFeatureEntry>(
  containers?: IFeatureEntry['containers'],
  actionCreators?: IFeatureEntry['actionCreators'],
  selectors?: IFeatureEntry['selectors'],
): T {
  return {
    containers: new Proxy(containers || {}, {
      get: (target, property: string) => target[property] || makeMockComponent('Container'),
    }),
    actionCreators: new Proxy(actionCreators || {}, {
      get: (target, property: string) => target[property] || jest.fn(),
    }),
    selectors: new Proxy(selectors || {}, {
      get: (target, property: string) => target[property] || jest.fn(),
    }),
  } as T;
}

export const withRouterProps: RouteComponentProps = {
  history: {
    length: 1,
    action: 'PUSH',
    push: jest.fn(),
    replace: jest.fn(),
    go: jest.fn(),
    goBack: jest.fn(),
    goForward: jest.fn(),
    listen: jest.fn(),
    block: jest.fn(),
    createHref: jest.fn(),
    location: {
      pathname: 'pathname',
      hash: 'hash',
      state: null,
      search: 'search',
    },
  },
  location: {
    pathname: 'pathname',
    hash: 'hash',
    state: null,
    search: 'search',
  },
  match: {
    params: {},
    isExact: true,
    path: 'path',
    url: 'https://the_url.com',
  },
};

export function makeMockEvent(type: string) {
  return new Event(type);
}
