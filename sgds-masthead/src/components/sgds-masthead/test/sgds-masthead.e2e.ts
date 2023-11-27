import { newE2EPage } from '@stencil/core/testing';

describe('sgds-masthead', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sgds-masthead></sgds-masthead>');

    const element = await page.find('sgds-masthead');
    expect(element).toHaveClass('hydrated');
  });
});
