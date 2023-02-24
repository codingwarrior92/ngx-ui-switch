import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer mb-4 mt-2">
      Demo using Angular {{ version }}
      <br />
      Released under the
      <a href="https://github.com/webcat12345/ngx-ui-switch/blob/master/LICENSE">MIT</a> license.
      <a href="https://github.com/webcat12345/ngx-ui-switch">View source</a>.
    </footer>
  `,
  styles: [
    `
      .footer {
        line-height: 2;
        text-align: center;
        font-size: 12px;
        color: #999;
      }
    `,
  ],
})
export class FooterComponent {
  version = VERSION.full;

  constructor() {}
}
