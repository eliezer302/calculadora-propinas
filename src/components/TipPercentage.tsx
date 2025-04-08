type TipPercentageProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>,
  tip: number
}

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

export const TipPercentage = ({ setTip, tip }: TipPercentageProps) => {
  return (
    <>
      <div>
        <h2 className="font-black text-2xl">Totales y propinas</h2>
        <form>
          {tipOptions.map(tipOption => (
            <div key={tipOption.id} className="flex gap-2">
              <label htmlFor="">{tipOption.label}</label>
              <input
                id={tipOption.id}
                type="radio"
                name="tipOption"
                value={tipOption.value}
                onChange={e => setTip(+e.target.value)}
                checked={tipOption.value === tip}
              />
            </div>
          ))}
        </form>
      </div>
    </>
  )
}
