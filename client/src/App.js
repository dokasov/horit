import React from 'react'
import AppFilled from './functions/AppFilled'
import { Form, Container, Button } from 'reactstrap'
import uuid from 'uuid'
import ClassInput from './Components/ClassInput'
import ResSchedulesGroup from './Components/ResSchedulesGroup'
import './App.css'

class App extends AppFilled {
  constructor() {
    super()
    this.state = {
      classes: this.newClasses(),
      goodCombs: [],
      classesName: []
    }
    this.addClass          = this.addClass.bind(this)
    this.deleteClass       = this.deleteClass.bind(this)
    this.addSchedule       = this.addSchedule.bind(this)
    this.deleteSchedule    = this.deleteSchedule.bind(this)
    this.addTimetable      = this.addTimetable.bind(this)
    this.deleteTimetable   = this.deleteTimetable.bind(this)
    this.changeName        = this.changeName.bind(this)
    this.changeHoursIni    = this.changeHoursIni.bind(this)
    this.changeHoursEnd    = this.changeHoursEnd.bind(this)
    this.changeDaysChecked = this.changeDaysChecked.bind(this)
    this.ready             = this.ready.bind(this)
    this.test              = this.test.bind(this)
  }

  newClasses() {
    return Array(4).fill(null).map(() => ({
      id: uuid.v4(),
      name: '',
      schedules: [
        {
          id: uuid.v4(),
          timetables: [
            {
              id: uuid.v4(),
              days: [],
              hours: { ini: '00:00', end: '00:00' }
            }
          ]
        }
      ]
    }))
  }

  test() {
    this.setState({classes: this.newClasses()}, () => {
      let classThings = this.state.classes
      
      for(let i=0; i<classThings.length; i++) {
        if(i===0) {
          classThings[i].name = 'Fís. Bás. I'
          //weird
          this.deleteSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addTimetable(classThings[i].id, classThings[i].schedules[0].id)
          this.addSchedule(classThings[i].id)
          this.addTimetable(classThings[i].id, classThings[i].schedules[1].id)
          this.addSchedule(classThings[i].id)
          this.addTimetable(classThings[i].id, classThings[i].schedules[2].id)
          this.addSchedule(classThings[i].id)
          this.addTimetable(classThings[i].id, classThings[i].schedules[3].id)
  
          classThings[i].schedules[0].timetables[0].days = ['Mo']
          classThings[i].schedules[0].timetables[0].hours.ini = '16:00'
          classThings[i].schedules[0].timetables[0].hours.end = '18:00'
          classThings[i].schedules[0].timetables[1].days = ['We', 'Fr']
          classThings[i].schedules[0].timetables[1].hours.ini = '08:00'
          classThings[i].schedules[0].timetables[1].hours.end = '10:00'
  
          classThings[i].schedules[1].timetables[0].days = ['Mo']
          classThings[i].schedules[1].timetables[0].hours.ini = '12:00'
          classThings[i].schedules[1].timetables[0].hours.end = '14:00'
          classThings[i].schedules[1].timetables[1].days = ['We', 'Fr']
          classThings[i].schedules[1].timetables[1].hours.ini = '08:00'
          classThings[i].schedules[1].timetables[1].hours.end = '10:00'
  
          classThings[i].schedules[2].timetables[0].days = ['Mo']
          classThings[i].schedules[2].timetables[0].hours.ini = '14:00'
          classThings[i].schedules[2].timetables[0].hours.end = '16:00'
          classThings[i].schedules[2].timetables[1].days = ['We', 'Fr']
          classThings[i].schedules[2].timetables[1].hours.ini = '12:00'
          classThings[i].schedules[2].timetables[1].hours.end = '14:00'
  
          classThings[i].schedules[3].timetables[0].days = ['Mo']
          classThings[i].schedules[3].timetables[0].hours.ini = '18:00'
          classThings[i].schedules[3].timetables[0].hours.end = '20:00'
          classThings[i].schedules[3].timetables[1].days = ['We', 'Fr']
          classThings[i].schedules[3].timetables[1].hours.ini = '12:00'
          classThings[i].schedules[3].timetables[1].hours.end = '14:00'
        }
        if(i===1) {
          classThings[i].name = 'Fís. Exp. I'
          //yep, weird
          this.deleteSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
  
          classThings[i].schedules[0].timetables[0].days = ['We', 'Fr']
          classThings[i].schedules[0].timetables[0].hours.ini = '08:00'
          classThings[i].schedules[0].timetables[0].hours.end = '10:00'
  
          classThings[i].schedules[1].timetables[0].days = ['We', 'Fr']
          classThings[i].schedules[1].timetables[0].hours.ini = '10:00'
          classThings[i].schedules[1].timetables[0].hours.end = '12:00'
  
          classThings[i].schedules[2].timetables[0].days = ['We', 'Fr']
          classThings[i].schedules[2].timetables[0].hours.ini = '12:00'
          classThings[i].schedules[2].timetables[0].hours.end = '14:00'
  
          classThings[i].schedules[3].timetables[0].days = ['We', 'Fr']
          classThings[i].schedules[3].timetables[0].hours.ini = '14:00'
          classThings[i].schedules[3].timetables[0].hours.end = '16:00'
  
          classThings[i].schedules[4].timetables[0].days = ['We', 'Fr']
          classThings[i].schedules[4].timetables[0].hours.ini = '16:00'
          classThings[i].schedules[4].timetables[0].hours.end = '18:00'
        }
        if(i===2) {
          classThings[i].name = 'Álg. Lin.'
          //yep, weird
          this.deleteSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addTimetable(classThings[i].id, classThings[i].schedules[2].id)
  
          classThings[i].schedules[0].timetables[0].days = ['Mo', 'We', 'Fr']
          classThings[i].schedules[0].timetables[0].hours.ini = '16:00'
          classThings[i].schedules[0].timetables[0].hours.end = '18:00'
  
          classThings[i].schedules[1].timetables[0].days = ['Mo', 'Tu', 'Th']
          classThings[i].schedules[1].timetables[0].hours.ini = '12:00'
          classThings[i].schedules[1].timetables[0].hours.end = '14:00'
  
          classThings[i].schedules[2].timetables[0].days = ['Mo']
          classThings[i].schedules[2].timetables[0].hours.ini = '14:00'
          classThings[i].schedules[2].timetables[0].hours.end = '16:00'
          classThings[i].schedules[2].timetables[1].days = ['Tu', 'Th']
          classThings[i].schedules[2].timetables[1].hours.ini = '06:00'
          classThings[i].schedules[2].timetables[1].hours.end = '08:00'
        }
        if(i===3) {
          classThings[i].name = 'Cálc. I'
          //yep, weird
          this.deleteSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addSchedule(classThings[i].id)
          this.addTimetable(classThings[i].id, classThings[i].schedules[2].id)
          this.addSchedule(classThings[i].id)
  
          classThings[i].schedules[0].timetables[0].days = ['Mo', 'Tu', 'Th']
          classThings[i].schedules[0].timetables[0].hours.ini = '06:00'
          classThings[i].schedules[0].timetables[0].hours.end = '08:00'
  
          classThings[i].schedules[1].timetables[0].days = ['Mo', 'Tu', 'Th']
          classThings[i].schedules[1].timetables[0].hours.ini = '12:00'
          classThings[i].schedules[1].timetables[0].hours.end = '14:00'
  
          classThings[i].schedules[2].timetables[0].days = ['Mo']
          classThings[i].schedules[2].timetables[0].hours.ini = '10:00'
          classThings[i].schedules[2].timetables[0].hours.end = '12:00'
          classThings[i].schedules[2].timetables[1].days = ['We', 'Fr']
          classThings[i].schedules[2].timetables[1].hours.ini = '14:00'
          classThings[i].schedules[2].timetables[1].hours.end = '16:00'
  
          classThings[i].schedules[3].timetables[0].days = ['Mo', 'We', 'Fr']
          classThings[i].schedules[3].timetables[0].hours.ini = '06:00'
          classThings[i].schedules[3].timetables[0].hours.end = '08:00'
        }
      }
      this.setState({classes: classThings})
    })
  }

  ready() {
    // fetch('http://localhost:5000/schedule', {
    fetch('/schedule', {
      method: 'POST',
      body: JSON.stringify(this.state.classes),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(data => this.received(data.combs))
    .catch(err => console.log('Request failure: ', err))
  }

  received(resCombs) {
    let classesName = []
    for(let e = 0; e < this.state.classes.length; e++) {
      classesName.push({name:this.state.classes[e].name, id:this.state.classes[e].id})
    }
    this.setState({goodCombs:resCombs, classesName:classesName})
  }

  render() {
    let classInputs = this.state.classes.map((classObject, step) => {
      return (
        <ClassInput
          key={classObject.id} id={classObject.id} name={classObject.name} 
          schedules={classObject.schedules} deleteClass={this.deleteClass}
          deleteSchedule={this.deleteSchedule} addSchedule={this.addSchedule} addClass={this.addClass}
          deleteTimetable={this.deleteTimetable} addTimetable={this.addTimetable}
          changeName={this.changeName} changeHoursIni={this.changeHoursIni}
          changeHoursEnd={this.changeHoursEnd} changeDaysChecked={this.changeDaysChecked} 
          index={step}
        />
      )
    })

    let tables = <ResSchedulesGroup goodCombs={this.state.goodCombs} classesName={this.state.classesName}/>
    return (
      <div className="App">
        <Container>
          <Form>
            {classInputs}
          </Form>
          <Button color="primary" onClick={this.addClass} style={{fontSize:14}}>
            <i className="fa fa-plus" aria-hidden="true"></i> Class
          </Button>
          {' '}
          <Button color="success" onClick={this.ready} style={{fontSize:14}}>
            <i className="fa fa-check" aria-hidden="true"></i> Ready
          </Button>
          {' '}
          <Button color="primary" onClick={this.test} style={{fontSize:14}}>
            <i className="fa fa-align-justify" aria-hidden="true"></i> Test
          </Button>
          {/* {' '}
          <Button color="primary" onClick={this.textMode} style={{fontSize:14}}>
            <i className="fa fa-align-justify" aria-hidden="true"></i> Modo Texto
          </Button> */}
          <div style={{marginTop:20}}>
            {tables}
          </div>
          {/* <pre>{JSON.stringify(this.state.results,null,2)}</pre> */}
        </Container>
      </div>
    )
  }
}

export default App