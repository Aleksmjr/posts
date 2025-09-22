import { appendFabric } from '../../helpers';
import styles from './infoList.module.scss';
import { constructor } from '../../helpers/constructor';
const { div, p, span } = constructor();

export class InfoList {
  constructor(data) {
    this.data = data;
    this.el = this.createContactGroup();
  }

  createContactGroup() {
    this.portfolioWork = div();
    this.portfolioWork.className = styles.infoList;

    for (let i = 0; i < this.data.length; i++) {
      const portfolioWorkName = p();
      portfolioWorkName.textContent = this.data[i][0];
      portfolioWorkName.className = styles.infoList__portfolio_item;
      const portfolioWorkYear = span();
      portfolioWorkYear.textContent = this.data[i][1];
      portfolioWorkYear.className = styles.infoList__portfolio_item;
      const portfolioWorkGroup = div();
      portfolioWorkGroup.className = styles.infoList__portfolio;
      appendFabric([
        [portfolioWorkGroup.el, [portfolioWorkName.el, portfolioWorkYear.el]],
        [this.portfolioWork.el, portfolioWorkGroup.el],
      ]);
    }
    return this.portfolioWork.el;
  }
}
