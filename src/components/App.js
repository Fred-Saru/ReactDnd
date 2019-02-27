import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      {
        name: 'Angular',
        category: 'wip',
        bgcolor: 'yellow'
      },
      {
        name: 'React',
        category: 'wip',
        bgcolor: 'skyblue'
      },
      {
        name: 'Vue',
        category: 'completed',
        bgcolor: 'pink'
      }
    ]
  };

  onDrop = (e, category) => {
    let id = e.dataTransfert.getData('id');
    let tasks = this.state.tasks.map((task) => {
      if (task.name === id) {
        task.category = category;
      }
      return task;
    });

    this.setState({
      tasks
    });
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDragStart = (e, id) => {
    e.dataTransfert.setData('id', id);
  };

  render() {
    var tasks = {
      wip: [],
      completed: []
    };

    this.state.tasks.map((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
          onDragStart={(e) => this.onDragStart(e, t.name)}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className="header">Drag & Drop demo</h2>
        <div className="wip">
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div
          className="completed droppable"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, 'completed')}
        >
          <span className="task-header">Completed</span>
          {tasks.completed}
        </div>
      </div>
    );
  }
}

export default App;
