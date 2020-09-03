$("#login-form").submit(e => {
    e.preventDefault()
    let input = $("#input").val()
    let secret = $("#secret").val()
    let $output = $("#output")

    console.log({input, secret})

    let decrypted = CryptoJS.AES.decrypt(input, secret).toString(CryptoJS.enc.Utf8)
    console.log({decrypted})
    try {
        decrypted = JSON.parse(decrypted)
        decrypted = JSON.stringify(decrypted, null, 4)
    } catch (e) {
        console.error(e)
    }
    
    $output.html(decrypted)
})