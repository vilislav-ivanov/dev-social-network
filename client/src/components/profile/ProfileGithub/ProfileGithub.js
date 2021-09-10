import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getGithubByUsername } from '../../../actions/github';
import Spinner from '../../common/Spinner';
import UserRepo from './UserRepo';

export class ProfileGithub extends Component {
  state = {
    githubusername: null,
  };
  componentDidMount() {
    this.props.getGithubByUsername(this.props.profile.githubusername);
    // this.setState({ githubusername:  });
  }

  render() {
    const { loading, repos } = this.props.repos;

    if (loading) {
      return <Spinner />;
    }
    let reposDisplay = <div>No repos</div>;
    if (repos && repos.length > 0) {
      reposDisplay = repos.map((repo) => (
        <UserRepo key={repo.url} repo={repo} />
      ));
    }
    return (
      <div>
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {reposDisplay}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  repos: state.repos,
});
export default connect(mapStateToProps, { getGithubByUsername })(ProfileGithub);
