class Component {

    constructor(props = {}, state = {}) {
      this.props = props
      this.state = state
    }

    update() {}
    
    #updater(){
      this.update(this.render())
      this.componentDidUpdate()
    }

    // Se llama antes de que se renderice el componente
    componentWillMount(){

    }

    // Se llama despues de que se renderice el componente
    componentDidMount(){

    }

    // Se llama cuando se actualizo el componente
    componentDidUpdate(){

    }

    setState(newState){
      this.state = {
        ...this.state,
        ...newState
      }
      this.#updater()
    }

    build(){
      this.componentWillMount()
      return this.render()
    }
}
  
export {
  Component
} 