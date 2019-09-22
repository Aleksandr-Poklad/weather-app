import * as React from 'react';
import { ReactNode } from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Grid.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {Forecast} from "../../models";
import {CityItem} from "../CityItem";
import {defaultCities} from '../../apis/DefaultCities';
import uuid from 'uuid/v4';


interface Props {
    children: ReactNode;
}

// interface Props {
//     data: Array<Forecast>;
// }

// class Grid extends React.PureComponent<Props & WithStyles<typeof styles>> {
//
//     public render() {
//         const {data, classes} = this.props;
//         if (data.length === 0) return <div>Loading</div>;
//
//         console.log(data.length);
//         console.log(data);
//         return (
//             <div className={classes.root}>
//
//                 {/*<CityItem key={ uuid() } weather={ data }/>*/}
//
//                 {
//                     data[0].list.map((item) => {
//
//                         return <CityItem key={ uuid() } data={ data }/>
//                         {/*<div key={ uuid() }>*/}
//                         {/*    {console.log(item)}*/}
//                         {/*    <h2>*/}
//                         {/*        {item.name}*/}
//                         {/*        <span>({item.sys.country})</span>*/}
//                         {/*    </h2>*/}
//                         {/*</div>*/}
//                     })
//                 }
//
//             </div>
//         );
//     }
//
// }


const Grid: React.FC<Props & WithStyles<typeof styles>> = ({classes, children}) => {

    const childrenWithProps  = React.Children.map(children, (child) => child);

    return <div className={classes.root}>
        {childrenWithProps }
    </div>;
};




const WrappedCity = withStyles(styles)(Grid);

export {WrappedCity as Grid};