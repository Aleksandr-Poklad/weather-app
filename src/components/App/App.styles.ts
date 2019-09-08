import { base, Theme } from '../../styles';

export default (theme: Theme) => {
    return {
        ...base(theme),
        root: {

            padding: '80px 15px'
        }
    };
};