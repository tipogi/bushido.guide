import { useCallback, useMemo } from "react";
import { 
  AMAZON_BASE64, AMAZON_GIFT_CARD, APPLE_PAY, APPLE_PAY_BASE64, BANK, BANK_BASE64, BIZUM, BIZUM_BASE64, CASH_APP, CASH_APP_BASE64, 
  CASH_BY_EMAIL, CASH_BY_EMAIL_BASE64, 
  CLEAR_X_CHANGE, F2F, F2F_BASE64, GOOGLE_PLAY_BASE64, GOOGLE_PLAY_GIFT_CARD, HALCASH, HALCASH_BASE64, LIQUID, LIQUID_BASE64, LITECOIN, LITECOIN_BASE64, LN, LN_BASE64, 
  MONERO, MONERO_BASE64, N26, N26_BASE64, PAYPAL, PAYPAL_BASE64, REBELLION, REBELLION_BASE64, REVOLUT, 
  REVOLUT_BASE64, SEPA, SEPA_BASE64, SKRILL, SKRILL_BASE64, STRIKE, STRIKE_BASE64, TETHER, 
  TETHER_BASE64, VENMO, VENMO_BASE64, WISE, WISE_BASE64, ZELLE, ZELLE_BASE64 
} from "~/constants";
import { IPaymentMethod } from "~/hooks/graphql/interfaces";

interface PaymentTypeProps {
  method: IPaymentMethod
}

export default function PaymentType({ method }: PaymentTypeProps) {
  //console.log(method)
  /*console.log(method.icon)
  const paymentTypes = useMemo(() => {
    const paymentTypes = method.icon;
    return paymentTypes.length === 1 
      ? paymentTypes[0]
      : paymentTypes;
  }, [method])*/

  const extractImg = useCallback((method: string) => {
    switch(method) {
      case REVOLUT:
        return REVOLUT_BASE64;
      case WISE:
        return WISE_BASE64;
      case REBELLION:
        return REBELLION_BASE64;
      case BIZUM:
        return BIZUM_BASE64;
      case N26:
        return N26_BASE64;
      case ZELLE:
      case CLEAR_X_CHANGE:
        return ZELLE_BASE64;
      case SKRILL:
        return SKRILL_BASE64;
      case VENMO:
        return VENMO_BASE64;
      case CASH_APP:
        return CASH_APP_BASE64;
      case STRIKE:
        return STRIKE_BASE64;
      case PAYPAL:
        return PAYPAL_BASE64;
      case SEPA:
        return SEPA_BASE64;
      case HALCASH:
        return HALCASH_BASE64;
      case AMAZON_GIFT_CARD:
        return AMAZON_BASE64;
      case APPLE_PAY:
        return APPLE_PAY_BASE64;
      case LN:
        return LN_BASE64;
      case MONERO:
        return MONERO_BASE64;
      case LIQUID:
        return LIQUID_BASE64;
      case TETHER:
        return TETHER_BASE64;
      case LITECOIN:
        return LITECOIN_BASE64;
      case BANK:
        return BANK_BASE64;
      case F2F:
        return F2F_BASE64;
      case CASH_BY_EMAIL:
        return CASH_BY_EMAIL_BASE64;
      case GOOGLE_PLAY_GIFT_CARD:
        return GOOGLE_PLAY_BASE64;
      default:
        return method;
    }
  }, [])

  const renderIcons = (icon: string[]) => {
    return icon.map((value, index) => {
      return (
        <img key={index} src={`${extractImg(value) }`}/>
      )
    })
  }
  const renderPaymentLabels = (icon: string[]) => {
    return icon.map((value, index) => {
      return <span key={index}>{ value }</span>
    })
  }
  
  return (
    <div className="market-payment-methods">
      { method.icons.length !== 0 && <div className="payment-icons">{renderIcons(method.icons)}</div> }
      { method.others.length !== 0 && <div className="other-payments">{ renderPaymentLabels(method.others) }</div> }
    </div>
  )
}