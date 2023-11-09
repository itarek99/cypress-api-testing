describe('HTTP Request', () => {
  it('Get Posts', () => {
    cy.api('GET', 'https://jsonplaceholder.typicode.com/posts').its('status').should('equal', 200);
  });
  it('Post a Post', () => {
    cy.api({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        userId: 1,
        title: 'qui est esse',
        body: 'Once upon a time there was a great Post',
      },
    })
      .its('status')
      .should('equal', 201);
  });
  it('Update a Post', () => {
    cy.api({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        body: 'Once upon a time there was a great Post',
      },
    })
      .its('status')
      .should('equal', 200);
  });
});
