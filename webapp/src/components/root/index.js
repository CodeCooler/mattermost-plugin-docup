import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {closeRootModal, create} from 'actions';
import {isRootModalVisible, getMessage, getPostID} from 'selectors';

import Root from './root';

const mapStateToProps = (state) => ({
    visible: isRootModalVisible(state),
    message: getMessage(state),
    postID: getPostID(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    close: closeRootModal,
    submit: create,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Root);
