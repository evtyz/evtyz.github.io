import Typewriter from 'typewriter-effect';
import TypewriterCore from 'typewriter-effect/dist/core';


class TypewriterModified extends Typewriter {
    componentDidMount() {
    }

    runTypewriter() {
        const instance = new TypewriterCore(this.typewriter, this.props.options);
        this.setState({
            instance,
        }, () => {
            const { onInit } = this.props;
            
            if(onInit) {
                onInit(instance);
            }
        });
    }
}

export default TypewriterModified;