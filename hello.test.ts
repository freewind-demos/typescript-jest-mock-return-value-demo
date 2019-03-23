test('forEach mock', () => {
  const myMock = jest.fn()
  myMock.mockReturnValueOnce(1)
    .mockReturnValueOnce('a')
    .mockReturnValue({hello: 'jest'});

  expect(myMock()).toBe(1);
  expect(myMock()).toEqual('a');
  expect(myMock()).toEqual({hello: 'jest'});
  expect(myMock()).toEqual({hello: 'jest'});
})
