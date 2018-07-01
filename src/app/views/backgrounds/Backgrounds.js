// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import cx                 from 'classnames';
import {
  Card,
  CardActions,
  CardTitle,
  CardText
}                         from 'material-ui/Card';
import FlatButton         from 'material-ui/FlatButton';

class Backgrounds extends PureComponent {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  static contextTypes = {
    // for manual routing
    router: PropTypes.object.isRequired
  };

  enterAnimationTimer = null;

  state = {
    animated: true,
    viewEnters: false
  };

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(this.setViewEnters, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { animated, viewEnters } = this.state;

    return(
      <section
        id="Backgrounds__container"
        className={
          cx({
            'content':       true,
            'animatedViews': animated,
            'invisible':     !viewEnters,
            'view-enter':    viewEnters
          })
        }>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="box">
              <Card>
                <CardTitle
                  title="Welcome"
                  subtitle="How this works"
                />
                <CardText>
                  Hi. Start with either a face or a body by clicking the links in the sidebar.
                </CardText>
                <CardActions>
                  <FlatButton
                    label="Browse faces"
                    onTouchTap={this.routeTo('faces')}
                  />
                  <FlatButton
                    label="Browse bodies"
                    onTouchTap={this.routeTo('bodies')}
                  />
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  setViewEnters = () => {
    this.setState({viewEnters: true});
  }

  goPreviousRoute = () => {
    const { history } = this.props;
    history.goBack();
  }

  routeTo = routeName => event => {
    event.preventDefault();
    const { history } = this.props;
    history.push({pathname: routeName});
  }
}

export default Backgrounds;
