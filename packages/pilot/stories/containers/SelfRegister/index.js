import React from 'react'
import { identity } from 'ramda'
import { action } from '@storybook/addon-actions'
import SelfRegister from '../../../src/containers/SelfRegister'

const actionPrevious = action('Previous')
const actionRedirectToHome = action('Go to Home')
const actionSubmit = action('Submit')

const SelfRegisterCreateAccount = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="create-account"
    t={identity}
  />
)

const SelfRegisterCheckCNPJ = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="check-cnpj"
    t={identity}
  />
)

const SelfRegisterTypeCNPJ = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="type-cnpj"
    t={identity}
  />
)

const SelfRegisterWithoutCNPJ = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="without-cnpj"
    t={identity}
  />
)

const SelfRegisterCompanyData = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="company-data"
    t={identity}
  />
)

const SelfRegisterPartnerData = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="partner-data"
    t={identity}
  />
)

const SelfRegisterPartnerAddress = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="partner-address"
    t={identity}
  />
)

const SelfRegisterAlreadySell = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="already-sell"
    t={identity}
  />
)

const SelfRegisterBusinessDetailPresent = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="business-detail-present"
    t={identity}
  />
)

const SelfRegisterBusinessDetailFuture = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="business-detail-future"
    t={identity}
  />
)

const SelfRegisterSalesAmountPresent = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="sales-amount-present"
    t={identity}
  />
)

const SelfRegisterSalesAmountFuture = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="sales-amount-future"
    t={identity}
  />
)

const SelfRegisterContract = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="contract"
    t={identity}
  />
)

const SelfRegisterWaitingRiskAnalysis = () => (
  <SelfRegister
    registerData={{ email: 'francisgleydisson@gmail.com' }}
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="waiting-risk-analysis"
    t={identity}
  />
)

const SelfRegisterRefusedAccount = () => (
  <SelfRegister
    onPreviousButton={actionPrevious}
    onRedirectToHome={actionRedirectToHome}
    onSubmit={actionSubmit}
    step="refused-account"
    t={identity}
  />
)

export {
  SelfRegisterCreateAccount,
  SelfRegisterCheckCNPJ,
  SelfRegisterTypeCNPJ,
  SelfRegisterWithoutCNPJ,
  SelfRegisterCompanyData,
  SelfRegisterPartnerData,
  SelfRegisterPartnerAddress,
  SelfRegisterAlreadySell,
  SelfRegisterBusinessDetailPresent,
  SelfRegisterBusinessDetailFuture,
  SelfRegisterSalesAmountPresent,
  SelfRegisterSalesAmountFuture,
  SelfRegisterContract,
  SelfRegisterWaitingRiskAnalysis,
  SelfRegisterRefusedAccount,
}
