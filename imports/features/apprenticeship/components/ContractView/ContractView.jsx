import React, { Component } from 'react';
import Radium from 'radium';

class ContractView extends Component {
  render() {
    return (<div>
        <h1>Contract</h1>
        <div className="row">
            <div className="large-6 columns small-12">
                <h2>Learning Frame and Goals</h2>
                <ul>
                    <li>An online blog setup using jekyll</li>
                    <li>A blog article elaborating on using jekyll</li>
                </ul>
                <h2>Learning Structure</h2>
                <ul>
                    <li>Answers within same day</li>
                    <li>Two conversations a week</li>
                </ul>
                <h2>Formal Structure</h2>
                <p>The student pays 50$ to the teach biweakly such that the
                teacher has them after a week teaching.</p>
                <p>The project is estimated to go on for 8 weeks totalling
                400$ for the full extend.</p>
            </div>
            <div className="large-6 columns small-12">
                <h2>Teaching Philosophy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec sit amet orci ligula. Vivamus dictum,
                    libero in volutpat bibendum, ante lorem vestibulum
                    felis, id ornare sapien quam vel ipsum. Pellentesque
                    lobortis felis nec sapien commodo luctus. Suspendisse
                    vel odio hendrerit, volutpat mauris quis, fringilla
                    justo. Aenean imperdiet vitae sapien ac volutpat.
                    Etiam volutpat, tortor non euismod tempus, leo massa
                    commodo mauris, nec dictum nibh leo nec ligula. Pham,
                    dictum vitae au</p>
                <h2>Learning Philosophy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec sit amet orci ligula. Vivamus dictum,
                    libero in volutpat bibendum, ante lorem vestibulum
                    felis, id ornare sapien quam vel ipsum. Pellentesque
                    lobortis felis nec sapien commodo luctus. Suspendisse
                    vel odio hendrerit, volutpat mauris quis, fringilla
                    justo. Aenean imperdiet vitae sapien ac volutpat.
                    Etiam volutpat, tortor non euismod tempus, leo massa
                    commodo mauris, nec dictum nibh leo nec ligula. Pham,
                    dictum vitae au</p>
            </div>
        </div>
    </div>);
  }
}


ContractView.propTypes = {};

ContractView.defaultProps = {};

export default Radium(ContractView)
