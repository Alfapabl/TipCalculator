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

  type tipFormProps =
  {
    setTip : React.Dispatch<React.SetStateAction<number>>
  }

export default function TipForm({setTip}: tipFormProps) {
  return (
    <div>
        <h3 className=" font-black text-2xl">Propina</h3>

        <form>
            {
                tipOptions.map(item => (
                    <div key={item.id}>
                        <label htmlFor={item.id}>{item.label}</label>
                        <input 
                        type="radio" 
                        id={item.id} 
                        value={item.value} 
                        name="tip"
                        onChange={e => setTip(+e.target.value)}/>
                        
                    </div>
                ))
            }
        </form>

    </div>
  )
}
