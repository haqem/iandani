import { newSpecPage } from '@stencil/core/testing';
import { SgdsMasthead } from '../sgds-masthead';

describe('sgds-masthead', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgdsMasthead],
      html: `<sgds-masthead></sgds-masthead>`,
    });
    expect(page.root).toEqualHtml(`
      <sgds-masthead>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sgds-masthead>
    `);
  });
});
