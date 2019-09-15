import { base, Theme } from '../../styles';

export default (theme: Theme) => {
    return {
        ...base(theme),
        root: {
            color: 'white'
        }
    };
};