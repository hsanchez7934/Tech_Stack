import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection } from './common';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text
            style={{
              flex: 1,
              paddingLeft: 15,
              paddingRight: 10 }}
          >
          {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { title, id } = this.props.library;
    const { selectLibrary } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
