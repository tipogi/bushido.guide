const HEADER = ['P2P', 'State', 'Premium', 'Minimun', 'Maximun', 'Payment Type'];

export default function MarketHeader() {
  return (
    <div id="market-header">
      { HEADER.map((value: string) => <span>{ value }</span>) }
    </div>
  )
}