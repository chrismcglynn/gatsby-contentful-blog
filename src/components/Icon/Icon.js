import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRight,
  faPlus,
  faSortDown,
  faAngleDown,
  faExclamationCircle,
  faCheck,
  faCheckCircle,
  faBook,
  faPlusSquare,
  faCog,
  faCheckSquare,
  faSave,
  faCommentAlt,
  faFileImport,
  faFileExport,
  faGlobeAmericas,
  faDivide,
  faLayerGroup,
  faArrowLeft,
  faTrash,
  faAngleUp,
  faTimes,
  faList,
  faCaretDown,
  faCaretUp,
  faCaretSquareDown,
  faICursor,
  faCalendarWeek,
  faHeading,
  faInfoCircle,
  faKey,
  faCodeBranch,
  faCaretRight,
  faSearch,
  faPlayCircle,
  faSitemap,
  faSpinner,
  faComments,
  faPaste,
  faCopy,
  faEdit,
  faServer,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

const IconsForIconName = {
  arrowRight: faArrowRight,
  spinner: faSpinner,
  layerGroup: faLayerGroup,
  divide: faDivide,
  plus: faPlus,
  edit: faEdit,
  sortDown: faSortDown,
  angleUp: faAngleUp,
  angleDown: faAngleDown,
  times: faTimes,
  exclamationCircle: faExclamationCircle,
  checkCircle: faCheckCircle,
  checkCircleR: farCheckCircle,
  book: faBook,
  plusSquare: faPlusSquare,
  cog: faCog,
  copy: faCopy,
  check: faCheck,
  data: faServer,
  checkSquare: faCheckSquare,
  save: faSave,
  comment: faCommentAlt,
  fileImport: faFileImport,
  fileExport: faFileExport,
  globe: faGlobeAmericas,
  arrowLeft: faArrowLeft,
  trash: faTrash,
  list: faList,
  caretDown: faCaretDown,
  caretUp: faCaretUp,
  caretRight: faCaretRight,
  caretSquareDown: faCaretSquareDown,
  cursor: faICursor,
  calendarWeek: faCalendarWeek,
  heading: faHeading,
  infoCircle: faInfoCircle,
  search: faSearch,
  key: faKey,
  codeBranch: faCodeBranch,
  playCircle: faPlayCircle,
  sitemap: faSitemap,
  comments: faComments,
  duplicate: faPaste,
  warning: faExclamationTriangle
};

function Icon({ icon, className, spin }) {
  return (<FontAwesomeIcon className={className} icon={icon} spin={spin} />);
}

Icon.defaultProps = {
  className: '',
  spin: false
};

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  className: PropTypes.string,
  spin: PropTypes.bool
};

export { Icon, IconsForIconName };

