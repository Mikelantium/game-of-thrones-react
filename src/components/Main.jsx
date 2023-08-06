import React from 'react';
import { MyContext } from '../shared/MyContext';

const Main = () => {
    const { t } = React.useContext(MyContext);

    return (
      <div>
        <div>{t('counter_text')}: </div>
      </div>
    );
}

export default Main;
