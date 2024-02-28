/* eslint-disable no-undef */
export const iziConfigFuntion = ({
  TRANSACTION_ID,
  MERCHANT_CODE,
  ORDER_NUMBER,
  ORDER_CURRENCY,
  ORDER_AMOUNT,
  currentTimeUnix,
}) => {
  return {
    // Configuración específica para IziPay
    config: {
      transactionId: TRANSACTION_ID,
      action: Izipay.enums.payActions.PAY,
      merchantCode: MERCHANT_CODE,
      order: {
        orderNumber: ORDER_NUMBER,
        currency: ORDER_CURRENCY,
        amount: ORDER_AMOUNT,
        processType: Izipay.enums.processType.AUTHORIZATION,
        merchantBuyerId: 'mc1768',
        dateTimeTransaction: currentTimeUnix,
        payMethod: Izipay.enums.showMethods.YAPE,
      },
      billing: {
        firstName: 'Juan',
        lastName: 'Wick',
        email: 'jwick@izipay.pe',
        phoneNumber: '989339999',
        street: 'calle el demo',
        city: 'lima',
        state: 'lima',
        country: 'PE',
        postalCode: '00001',
        document: '12345678',
        documentType: Izipay.enums.documentType.DNI,
      },
      render: {
        typeForm: Izipay.enums.typeForm.POP_UP,
        showButtonProcessForm: false,
      },
      appearance: {
        logo: 'https://www.cinergia.lat/_next/static/media/cinergiaLogoWeb1.ae313dc1.svg',
      },
    },
  };
};
