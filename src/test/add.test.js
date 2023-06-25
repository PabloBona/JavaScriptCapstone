describe('Add new <p> to the document', () => {
  test('Adds a new <p> element to the document', () => {
    // Create a new <p> element
    const newP = document.createElement('p');
    newP.textContent = 'Microverse';

    // Append the new <p> element to the document body
    document.body.appendChild(newP);

    // Check if the <p> element has been successfully added
    expect(document.body.contains(newP)).toBe(true);
  });
});
