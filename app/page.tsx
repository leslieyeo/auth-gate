"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, ArrowRight } from "lucide-react"

export default function AuthPage() {
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const validateCode = (input: string): boolean => {
    const hasNumber = /\d/.test(input)
    const hasLetter = /[a-zA-Z]/.test(input)
    return hasNumber && hasLetter
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (validateCode(code.trim())) {
      setTimeout(() => {
        setIsAuthenticated(true)
        setIsLoading(false)
      }, 500)
    } else {
      setError("授权码错误，请联系心灵疗愈客服")
      setIsLoading(false)
    }
  }

  if (isAuthenticated) {
    return (
      <div className="relative w-full h-screen">
        <div className="absolute top-0 left-0 h-16 bg-white z-10 w-[6%1p p] w-full" />
        <iframe src="https://adhdassessment.me/zh" className="w-full h-full border-0" title="ADHD Assessment" />
      </div>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="border-border shadow-lg">
          <CardHeader className="space-y-3 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-balance">访问验证</CardTitle>
            <CardDescription className="text-muted-foreground text-pretty">请输入授权码以继续访问</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code" className="text-sm font-medium">
                  授权码
                </Label>
                <Input
                  id="code"
                  type="text"
                  placeholder="请输入授权码"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value)
                    setError("")
                  }}
                  className={error ? "border-destructive" : ""}
                  disabled={isLoading}
                  autoFocus
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={!code.trim() || isLoading}>
                {isLoading ? (
                  "验证中..."
                ) : (
                  <>
                    验证并进入
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        <p className="text-center text-sm text-muted-foreground mt-6">请联系店铺心灵疗愈客服获取授权码</p>
      </div>
    </main>
  )
}
