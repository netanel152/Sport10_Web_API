import React, { Component } from 'react'
import NavWeb from './Nav';
import Carousel from 'react-bootstrap/Carousel';
import '../CSSWeb/home.css'
import { Card, Button, Alert } from 'react-bootstrap/';
import rokaviza from '../images/rokaviza.jpg';
import coach from '../images/1067598.jpg'
import card1 from '../images/1067766.jpg'

import { withRouter, Link } from 'react-router-dom';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams')),
      teamA: 0,
      teamB: 0,
    }
  }
  handleTeamA = (e) => {
    let event = e.target.value
    while (this.state.teamB === event) {
      // alert("בחרת אותה קבוצה")
      let showAlert = document.getElementById("wr").innerHTML = "לא ניתן לבחור אותה קבוצה"
      showAlert += document.getElementById("wr").style.display = "block"
      setTimeout(showAlert, 500);
      setTimeout(() => {
        showAlert = document.getElementById("wr").style.display = "none"
      }, 1500);
      return;
    }
    this.setState({ teamA: e.target.value })
  }
  handleTeamB = (e) => {
    let event = e.target.value
    while (this.state.teamA === event) {
      // alert("בחרת אותה קבוצה")
      let showAlert = document.getElementById("wr").innerHTML = "לא ניתן לבחור אותה קבוצה"
      showAlert += document.getElementById("wr").style.display = "block"
      setTimeout(showAlert, 500);
      setTimeout(() => {
        showAlert = document.getElementById("wr").style.display = "none"
      }, 1500);
      return;
    }
    this.setState({ teamB: e.target.value })
  }

  handleGameBtn = () => {
    if (this.state.teamA == 0 || this.state.teamB == 0) {
      let showAlert = document.getElementById("wr").innerHTML = "לא נבחרו קבוצות, אנא בחר קבוצות להגרלה"
      showAlert += document.getElementById("wr").style.display = "block"
      setTimeout(showAlert, 500);
      setTimeout(() => {
        showAlert = document.getElementById("wr").style.display = "none"
      }, 2500);
      return
    }
    this.props.handleGameBtn(parseInt(this.state.teamA), parseInt(this.state.teamB))
  }

  sendIdArtcile = (num) => {
    this.props.setArticleNum(num)
  }



  render() {
    return (
      <div style={{ backgroundColor: 'lightcyan' }}>
        <NavWeb />
        <center>
          <h1 style={{ color: 'lightseagreen', fontStyle: 'oblique', fontSize: 50 }}>ברוכים הבאים לספורט 10</h1>
          <Carousel style={{ marginTop: 20, marginBottom: 15 }}>
            <Carousel.Item >
              <img
                style={{ borderRadius: 7 }}
                width="1300" height="600"
                src="https://pbs.twimg.com/media/DtWJbzjWsAM8N7f.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>ברוכים הבאים</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ borderRadius: 7 }}
                width="1300" height="600"
                src="https://images.one.co.il/images/d/dmain/ms/gg1442221.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>לאתר</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ borderRadius: 7 }}
                width="1300" height="600"
                src="https://www.amigo.co.il/wp-content/uploads/2017/09/-%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99-2-e1506932783533-600x400.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>הטוב במדינה!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </center>
        <h4 style={{ textAlign: 'center', color: 'lightseagreen', fontStyle: 'oblique', fontSize: 40 }}>כתבות חמות</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2%', textAlign: 'right', backgroundColor: 'rgba(117, 133, 145, 0.1)' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rokaviza} width='30%' height='50%' />
            <Card.Body style={{ backgroundColor: 'lightcyan' }}>
              <Card.Title>לצד סון: רוקאביצה בין נבחרי העונה באסיה</Card.Title>
              <Card.Text>
                <Link to="/article"><Button variant="dark" onClick={() => this.sendIdArtcile(0)}>לחץ לפתיחת הכתבה</Button></Link>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card1} width='30%' height='50%' />
            <Card.Body style={{ backgroundColor: 'lightcyan' }}>
              <Card.Title>מצעד ההעברות הגדולות של ינואר</Card.Title>
              <Card.Text>
                <Link to="/article"><Button variant="dark" onClick={() => this.sendIdArtcile(1)}>לחץ לפתיחת הכתבה</Button></Link>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={coach} width='30%' height='50%' />
            <Card.Body style={{ backgroundColor: 'lightcyan' }}>
              <Card.Title>המאמנים שנמצאים בסכנת הרחקה</Card.Title>
              <Card.Text>
                <Link to="/article"><Button variant="dark" onClick={() => this.sendIdArtcile(2)}>לחץ לפתיחת הכתבה</Button></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div >
          <Card className="text-center" style={{ backgroundColor: 'lightcyan' }}>
            <h4 style={{ textAlign: 'center', color: 'lightseagreen', fontStyle: 'oblique', fontSize: 40 }}>פינת ההגרלה</h4>
            <Card.Body >
              <Card.Title style={{ textAlign: 'center' }}>בחר קבוצות ולחץ על אישור כדי לראות את תוצאת המשחק</Card.Title>
              <br />
              <Card.Text>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <div>
                    <select onChange={this.handleTeamA}>
                      <option value=''>בחר קבוצה</option>
                      {this.state.teamsFromLocalstorage === null && this.props.teams.map((team, index) => <option key={index} value={team.id} >
                        {team.club}
                      </option>
                      )}
                      {this.state.teamsFromLocalstorage !== null && this.state.teamsFromLocalstorage.map((team, index) => <option key={index} value={team.id} >
                        {team.club}
                      </option>
                      )}
                    </select>
                  </div>
                  <b>{this.props.pointB}:{this.props.pointA}</b>
                  <div>
                    <select onChange={this.handleTeamB}>
                      <option value=''>בחר קבוצה</option>
                      {this.state.teamsFromLocalstorage === null && this.props.teams.map((team, index) => <option key={index} value={team.id} >
                        {team.club}
                      </option>
                      )}
                      {this.state.teamsFromLocalstorage !== null && this.state.teamsFromLocalstorage.map((team, index) => <option key={index} value={team.id} >
                        {team.club}
                      </option>
                      )}
                    </select>
                  </div>
                </div>
              </Card.Text>
              <Button variant="dark" onClick={this.handleGameBtn}>אשר בחירה</Button><br /><br />
              <Alert id="wr" variant="danger" style={{ display: 'none' }} />
              {this.props.resultsGames.map((res, index) =>
                <div key={index}>
                  <b>{res.teamA} {res.pB}:{res.pA} {res.teamB}</b>
                </div>)}
            </Card.Body>
            <Card.Footer className="text-muted">
              <Alert id="wr" variant="danger" style={{ display: 'none' }} />
            </Card.Footer>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);