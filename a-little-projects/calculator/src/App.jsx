import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('0');

  const handleClickNumberBtn = (e) => {
    const val = e.target.value === 'x' ? '*' : e.target.value;

    if (['+', '-', '/', '*'].includes(val) && ['+', '-', '/', '*'].includes(value[value.length - 1])) {
      return setValue((el) => el.replace(/.$/, val));
    }
    setValue((el) => (el += val));
  };

  const handleClickEquil = () => {
    const res = eval(value.replace(/[^\d]+$/, ''));

    res ? setResult(res) : setResult(0);
  };

  const handleClickClear = () => {
    setValue('');
    setResult('0');
  };

  const handleClickDel = () => {
    value ? setValue((val) => val.substring(0, val.length - 1)) : setValue('');
  };

  return (
    <div className="wrapper">
      <div className="calc">
        <div className="calc__container">
          <div className="calc__screen">
            <p className="calc__value">{value}</p>
            <p className="calc__result">{result}</p>
          </div>
          <div className="calc__panel">
            <table>
              <tbody>
                <tr>
                  <td>
                    <input onClick={handleClickClear} type="button" className="btn operator" value="C" />
                  </td>
                  <td>
                    <input onClick={handleClickDel} type="button" className="btn operator" value="<" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="/" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="x" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="7" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="8" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="9" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="-" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="4" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="5" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="6" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="+" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="1" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="2" />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="3" />
                  </td>
                  <td rowSpan={2}>
                    <input
                      onClick={handleClickEquil}
                      style={{ height: '150px' }}
                      type="button"
                      className="btn operator"
                      value="="
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input
                      onClick={handleClickNumberBtn}
                      style={{ width: '150px' }}
                      type="button"
                      className="btn operator"
                      value="0"
                    />
                  </td>
                  <td>
                    <input onClick={handleClickNumberBtn} type="button" className="btn operator" value="." />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
