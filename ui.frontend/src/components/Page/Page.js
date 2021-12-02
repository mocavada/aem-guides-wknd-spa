
import {
  MapTo,
  Page,
  withComponentMappingContext
} from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';

require('./Page.css');

// This component is a variant of a Page component mapped to the
// "wknd-spa-react/components/page" resource type. For now, the rendering is
// the same as the RootPage; this is more for illustration purposes
class AppPage extends Page {
  get containerProps() {
    let attrs = super.containerProps;
    attrs.className =
      (attrs.className || '') + ' page ' + (this.props.cssClassNames || '');
    return attrs;
  }
}

export default MapTo('wknd-spa-react/components/page')(
  withComponentMappingContext(withRoute(AppPage))
);
