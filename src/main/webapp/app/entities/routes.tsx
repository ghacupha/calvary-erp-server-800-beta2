import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import TransactionAccount from './transaction-account';
import TransactionEntry from './transaction-entry';
import AccountTransaction from './account-transaction';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="transaction-account/*" element={<TransactionAccount />} />
        <Route path="transaction-entry/*" element={<TransactionEntry />} />
        <Route path="account-transaction/*" element={<AccountTransaction />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
