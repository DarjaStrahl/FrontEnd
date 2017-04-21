interface ItemResource {
  name: string;
  state: boolean;
  _links: {
    self: {
      href: string;
    }
  };
}
