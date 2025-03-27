class FormValidation {
  constructor() {
    this.patterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      name: /^[a-zA-Z\u4e00-\u9fa5\s]{2,20}$/,
      message: /^[\s\S]{10,500}$/
    };

    this.messages = {
      email: {
        required: '请输入邮箱地址',
        invalid: '请输入有效的邮箱地址'
      },
      password: {
        required: '请输入密码',
        invalid: '密码必须包含字母和数字,长度至少8位'
      },
      name: {
        required: '请输入姓名',
        invalid: '姓名长度必须在2-20个字符之间'
      },
      message: {
        required: '请输入消息内容',
        invalid: '消息长度必须在10-500个字符之间'
      }
    };
  }

  validateField(field, value, type) {
    const errors = [];

    // 检查必填
    if (!value) {
      errors.push(this.messages[type].required);
      return errors;
    }

    // 检查格式
    if (!this.patterns[type].test(value)) {
      errors.push(this.messages[type].invalid);
    }

    return errors;
  }

  validateForm(form) {
    const errors = {};
    let isValid = true;

    // 验证所有输入字段
    form.querySelectorAll('input, textarea').forEach(field => {
      const type = field.getAttribute('data-validate');
      if (type) {
        const fieldErrors = this.validateField(field, field.value, type);
        if (fieldErrors.length > 0) {
          errors[field.name] = fieldErrors;
          isValid = false;
          this.showFieldError(field, fieldErrors[0]);
        } else {
          this.clearFieldError(field);
        }
      }
    });

    return { isValid, errors };
  }

  showFieldError(field, message) {
    // 移除之前的错误提示
    this.clearFieldError(field);

    // 添加错误样式
    field.classList.add('error');

    // 创建错误提示元素
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  clearFieldError(field) {
    // 移除错误样式
    field.classList.remove('error');

    // 移除错误提示
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  validatePasswordMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
      return '两次输入的密码不一致';
    }
    return '';
  }

  validateTerms(checkbox) {
    if (!checkbox.checked) {
      return '请同意服务条款';
    }
    return '';
  }

  // 实时验证
  setupRealTimeValidation(form) {
    form.querySelectorAll('input, textarea').forEach(field => {
      const type = field.getAttribute('data-validate');
      if (type) {
        field.addEventListener('input', () => {
          const errors = this.validateField(field, field.value, type);
          if (errors.length > 0) {
            this.showFieldError(field, errors[0]);
          } else {
            this.clearFieldError(field);
          }
        });
      }
    });
  }

  // 密码强度检查
  checkPasswordStrength(password) {
    let strength = 0;
    const checks = {
      length: password.length >= 8,
      hasLetter: /[A-Za-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*]/.test(password)
    };

    Object.values(checks).forEach(check => {
      if (check) strength++;
    });

    return {
      score: strength,
      level: strength <= 1 ? 'weak' : strength <= 2 ? 'medium' : 'strong'
    };
  }

  // 显示密码强度指示器
  showPasswordStrength(password) {
    const strength = this.checkPasswordStrength(password);
    const indicator = document.querySelector('.password-strength');
    if (indicator) {
      indicator.className = `password-strength ${strength.level}`;
      indicator.textContent = strength.level === 'weak' ? '弱' :
                            strength.level === 'medium' ? '中' : '强';
    }
  }
}
