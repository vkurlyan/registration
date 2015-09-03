define(["handlebars.runtime"],function(n){n=n["default"];var e=n.template,r=n.templates=n.templates||{};return r[404]=e({compiler:[7,">= 4.0.0"],main:function(n,e,r,t,s){return"<h1>Page not found</h1>"},useData:!0}),r["registration/bankAccount"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,r,t,s){return'<fieldset>\r\n    <legend>Bank Account</legend>\r\n    <div class="form-row">\r\n        <label>IBAN</label>\r\n        <div class="input-col">\r\n            <input type="text" name="iban">\r\n            <span class="error-msg"></span>\r\n        </div>\r\n    </div>\r\n    <div class="form-row">\r\n        <label>BIC</label>\r\n        <div class="input-col">\r\n            <input type="text" name="bic">\r\n            <span class="error-msg"></span>\r\n        </div>\r\n    </div>\r\n    <div class="delete-container">\r\n        <button class="delete-account" type="button">Delete</button>\r\n    </div>\r\n</fieldset>'},useData:!0}),r["registration/step1"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,r,t,s){return'<form class="registration-step1">\r\n    <fieldset>\r\n        <legend>Personal Data</legend>\r\n        <div class="form-row">\r\n            <label>First Name</label>\r\n            <div class="input-col">\r\n                <input type="text" name="firstName">\r\n                <span class="error-msg"></span>\r\n            </div>\r\n        </div>\r\n        <div class="form-row">\r\n            <label>Last Name</label>\r\n            <div class="input-col">\r\n                <input type="text" name="lastName">\r\n                <span class="error-msg"></span>\r\n            </div>\r\n        </div>\r\n        <div class="form-row">\r\n            <label>DOB</label>\r\n            <div class="input-col">\r\n                <input type="text" name="dateOfBirthday">\r\n                <span class="error-msg"></span>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n    <input type="submit" class="next-step" value="Next Step" />\r\n</form>'},useData:!0}),r["registration/step2"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,r,t,s){return'<form class="registration-step2">\r\n    <div class="bank-accounts"></div>\r\n    <div class="error-message"></div>\r\n    <button type="button" class="add-account">Add Bank Account</button>\r\n    <input type="submit" class="save" value="Save"/>\r\n</form>'},useData:!0}),r["registration/success"]=e({compiler:[7,">= 4.0.0"],main:function(n,e,r,t,s){return'<h1 class="success-message">You have successfully registered</h1>'},useData:!0}),r});
