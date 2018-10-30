import {
  applySpec,
  concat,
  head,
  keys,
  map,
  path,
  pick,
  pipe,
  prop,
  uniq,
  values,
} from 'ramda'

import transactionSpec from '../shared/export'

const pickProps = [
  'amount',
  'antifraud',
  'brand_name',
  'capture_method',
  'documents',
  'email',
  'id',
  'ip',
  'name',
  'paid_amount',
  'payment_method',
  'refund_amount',
  'risk_level',
  'status',
  'status_reason',
  'subscription',
  'updated_at',
]

const headers = [
  { status: 'Status' },
  { id: 'ID'},
  { created_date: 'Data'},
  { name: 'Nome'},
  { payment_method: 'Forma de Pagamento'},
  { last_digits: 'Número do Cartão'},
  { document: 'Documento'},
  { email: 'Email'},
  { subscription: 'ID da Assinatura'},
  { phones: 'Telefone'},
  { holder_name: 'Operadora de Cartão'},
  { status_reason: 'Resposta da Operadora'},
  { ip: 'IP'},
  { brand_name: 'Bandeira do Cartão'},
  { amount: 'Valor'},
  { capture_amount: 'Valor Capturado'}, 
  { refunded_amount: 'Valor Estornado'},
  { split_rules: 'Recebedores'},
  { address: 'Endereço'},
  { address_number: 'Número do Endereço'},
  { address_complement: 'Complemento'},	
  { address_neibourhold: 'Bairro'},
  { address_zip_cpde: 'CEP'}, 
  { address_city: 'Cidade'},
  { address_state: 'Estado'},
]



const headers = [
  'Status',
  'ID',
  'Data',
  'Nome',
  'Forma de Pagamento',
  'Número do Cartão',
  'Documento',
  'Email',
  'ID da Assinatura',
  'Telefone',
  'Operadora de Cartão',
  'Resposta da Operadora',
  'IP',
  'Bandeira do Cartão',
  'Valor',
  'Valor Capturado', 
  'Valor Estornado',
  'Recebedores',
  'Endereço',
  'Número do Endereço',
  'Complemento',	
  'Bairro',
  'CEP', 
  'Cidade',
  'Estado',
]




const getHeaderValidProps = pipe(
  head,
  prop('_source'),
  pick(pickProps)
)

const exportKeys = pipe(
  getHeaderValidProps,
  keys,
  concat(pickProps),
  uniq
)

const exportKeysCSV = exportData => exportKeys(exportData).join(',')

const format = exportType => (exportData) => {
  if (exportType === 'csv') {
    return values(exportData).join(',')
  }

  return values(exportData)
}

const mapSourceToData = applySpec(transactionSpec)

const formatLines = exportType => map(pipe(
  prop('_source'),
  mapSourceToData,
  format(exportType)
))

const buildData = exportType => (exportData) => {
  if (exportType === 'csv') {
    const header = exportKeysCSV(exportData)
    const lines = formatLines(exportType)
    return [header].concat(lines(exportData)).join('\r\n')
  }

  const header = exportKeys(exportData)
  const lines = formatLines(exportType)
  return [header].concat(lines(exportData))
}

const buildResult = exportType => pipe(
  path(['hits', 'hits']),
  buildData(exportType)
)

export default buildResult
