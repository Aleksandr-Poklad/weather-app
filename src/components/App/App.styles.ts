import { base, Theme } from '../../styles';

export default (theme: Theme) => {
    return {
        ...base(theme),
        root: {
            backgroundColor: theme.palette.primary.main,
            padding: '80px 15px'
        }
    };
};