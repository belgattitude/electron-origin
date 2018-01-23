import { connect } from 'react-redux';
import Converter from './Converter';

const mapStateToProps = (state: any) => {
    console.log('HERETHESTATE', state);
    return {
        conversion: state.conversion,
    };
};

const ConverterConnected = connect(mapStateToProps)(Converter as any);
export default ConverterConnected;
