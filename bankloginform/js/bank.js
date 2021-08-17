

document.getElementById('deposit_button').addEventListener('click',function(){
    // get the amount Diposit 
    const myEmail=document.getElementById('Diposite_input')
    const mainEamilText=myEmail.value;
    const mainEamil =parseFloat(mainEamilText)



        const dipositTotal = document.getElementById('diposit_amount')
        const previousAmountText= (dipositTotal.innerText)
        const previousDipositAmount = parseFloat(previousAmountText)
        const newAmount = previousDipositAmount + mainEamil
            dipositTotal.innerText=newAmount;

            // update account balance 

            const balanceTotal = document.getElementById('diposit_balance')
            const balanceTotalText =balanceTotal.innerText
            const previousBalanceTotal = parseFloat(balanceTotalText)
                const newBalanceTotal = previousBalanceTotal + mainEamil
                balanceTotal.innerText = newBalanceTotal

    // diposite input clear 
    myEmail.value = '';
})

// button 
document.getElementById('Withdraw_button').addEventListener('click',function (){
    // input 
    const withdrowInput = document.getElementById('Withdraw_input')
    const withdroValue = withdrowInput.value;
    // parseFloat
    const withdroTotal = parseFloat(withdroValue)
        // implement 
        const withdrowTotal = document.getElementById('diposit_withdraw')
        const withdroTotalText = withdrowTotal.innerText;
        const previousWithdrowTotal = parseFloat(withdroTotalText)

        const main=withdrowTotal.innerText = previousWithdrowTotal + withdroTotal

            withdrowTotal.innerText = main
                // update new Balance 
                const newBalance = document.getElementById('diposit_balance')
                const previousBalenceText =newBalance.innerText;
                const previousBalanceUpdate = parseFloat(previousBalenceText)
                const total = previousBalanceUpdate - withdroTotal;
                newBalance.innerText =total;

            withdrowInput.value = '';
})
